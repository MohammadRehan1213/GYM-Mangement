const Admin = require("../Models/AdminModel/AdminModel")
const Member = require("../Models/UserModel/UserModel")
const Staff = require("../Models/StaffModel/StaffModel")
const asyncHandler = require('express-async-handler')
const { generateRefreshToken } = require("../config/refreshtoken")
const { generateToken } = require("../config/jwtToken");

const loginAdmin = asyncHandler(async (req, res) => {
    const { password, email } = req.body;

    const findAdmin = await Admin.findOne({ email, role: "admin" });
    const findUser = await Member.findOne({ email, role: "Membership" });
    const findSuperAdmin = await Staff.findOne({ email, role: "staff" });

    let user;
    let role;

    if (findAdmin) {
        user = findAdmin;
        role = "admin";
    } else if (findUser) {
        user = findUser;
        role = "Membership";
    } else if (findSuperAdmin) {
        user = findSuperAdmin;
        role = "staff";
    } else {
        return res.status(401).json({ message: "Invalid Credentials" });
    }

    if (user && (await user.isPasswordMatched(password))) {
        const refreshToken = generateRefreshToken(user._id);

        if (role === "admin") {
            await Admin.findByIdAndUpdate(
                user._id,
                {
                    refreshToken,
                },
                { new: true }
            );
        } else if (role === "staff") {
            await Staff.findByIdAndUpdate(
                user._id,
                {
                    refreshToken,
                },
                { new: true }
            );
        } else if (role === "Membership") {
            await Member.findByIdAndUpdate(
                user._id,
                {
                    refreshToken,
                },
                { new: true }
            );
        }
        let responseData = {};

        if (role === "Membership") {
            responseData = {
                _id: user._id,
                memberId: user.memberId,
                firstName: user.firstName,
                email: user.email,
                password: user.password,
                middleName: user.middleName,
                lastName: user.lastName,
                gender: user.gender,
                dob: user.dob,
                address: user.address,
                city: user.city,
                state: user.state,
                role: user.role,
                zipcode: user.zipcode,
                weight: user.weight,
                fat: user.city,
                chest: user.chest,
                waist: user.waist,
                thigh: user.thigh,
                arms: user.arms,
                fat: user.fat,
                userName: user.userName,
                password: user.password,
                image: user.image,
                memberShip: user.memberShip,
                memberShipfrom: user.memberShipfrom,
                memberShipto: user.memberShipto,
                token: generateToken(user._id),
            };
        } else if (role === "admin") {
            responseData = {
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
                token: generateToken(user._id),
            };
        }
        else
            if (role === "staff") {
                responseData = {
                    firstName: user.firstName,
                    middleName: user.middleName,
                    lastName: user.lastName,
                    gender: user.gender,
                    dateOfBirth: user.dateOfBirth,
                    assignRole: user.assignRole,
                    selectRole: user.selectRole,
                    specialization: user.specialization,
                    homeTownAddress: user.homeTownAddress,
                    city: user.city,
                    mobileNumber: user.mobileNumber,
                    email: user.email,
                    password: user.password,
                    username: user.username,
                    displayImage: user.displayImage,
                    role: user.role,
                    token: generateToken(user._id),
                };
            } else
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    maxAge: 72 * 60 * 60 * 1000,
                });
        res.json(responseData);
    } else {
        res.json("Inavalid Email or Password!")
    }
});

module.exports = { loginAdmin }