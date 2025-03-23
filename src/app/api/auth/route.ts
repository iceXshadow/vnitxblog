import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import User from "@/models/Users";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/jwt";

// Signup endpoint
export async function POST(req: NextRequest, res: NextResponse) {
    await connectDB();
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }
        if (password.length < 6) {
            return NextResponse.json(
                { message: "Password must be at least 6 characters" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 409 }
            );
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
            return NextResponse.json({
                _id: newUser._id,
                email: newUser.email,
                fullName: newUser.userName,
                avatar: newUser.avatar,
            },
            { status: 201 }
            );
        } else {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error)?.message },
            { status: 500 }
        );
    }
}

// Login endpoint
export async function PUT(req: NextRequest, res: NextResponse) {
    await connectDB();
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        generateToken(user._id, res);

        return NextResponse.json({
            _id: user._id,
            email: user.email,
            userName: user.userName,
            avatar: user.avatar,
        });

    } catch (error) {
        return NextResponse.json(
            { error: (error as Error)?.message },
            { status: 500 }
        );
    }
}

// Logout endpoint
export async function DELETE() {
    try {
        const response = NextResponse.json(
            { message: "Logged out successfully" },
            { status: 200 }
        );

        // Clear the token cookie
        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/'
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error)?.message },
            { status: 500 }
        );
    }
}

// // Check Authentication endpoint
// export async function GET(req: NextRequest) {
//     try {
//         const token = req.cookies.get('token')?.value;

//         if (!token) {
//             return NextResponse.json(
//                 { authenticated: false },
//                 { status: 401 }
//             );
//         }

//         const decoded = await verifyToken(token);
        
//         if (!decoded) {
//             return NextResponse.json(
//                 { authenticated: false },
//                 { status: 401 }
//             );
//         }

//         const user = await User.findById(decoded.userId).select('-password');

//         if (!user) {
//             return NextResponse.json(
//                 { authenticated: false },
//                 { status: 401 }
//             );
//         }

//         return NextResponse.json({
//             authenticated: true,
//             user: {
//                 _id: user._id,
//                 email: user.email,
//                 userName: user.userName,
//                 profilePic: user.avatar,
//             }
//         });

//     } catch (error) {
//         return NextResponse.json(
//             { authenticated: false, error: (error as Error)?.message },
//             { status: 401 }
//         );
//     }
// }