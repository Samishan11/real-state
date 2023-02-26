const Booking = require('../models/bookingModel');
const Property = require("../models/propertyModel")
const User = require("../models/userModel")
const { mail } = require('../utils/mail')
exports.Booking = async (req, res) => {
    try {
        const isExist = await Booking.findOne({ user: req.body.user, property: req.body.property });
        if (!isExist) {
            const booking_ = await new Booking(req.body);
            await booking_.save();
            res.json(booking_);
        } else {
            res.json({ message: "Propery already booked", booked: true });
        }
    } catch (error) {
        res.json(error);
    }
};

exports.Update_Booking = async (req, res) => {
    try {
        console.log(req.body)
        const isExist = await Booking.findOne({ property: req.params.id });
        console.log(isExist.accept)
        // const property = await Property.findOne({ _id: req.params.id });
        const user = await User.findOne({ _id: isExist.user });
        isExist.accept = true
        isExist.appointment = req.body.appointment
        isExist.save()
        mail().sendMail({
            from: "joker.shan99@gmail.com",
            to: user.email,
            subject: "Real-Estate Meeting Shedule.",
            html: `<p style="text-align:center; font-size:16px;"> The property you had been offered has been accepted and meeting has been shedule on ${new Date(req.body.appointment).toDateString()} </p>`
        })
        res.json({ message: "Verified" });
    } catch (error) {
        res.json(error);
    }
}

exports.cancelBooking = async (req, res) => {
    try {
        const isExist = await Booking.findOne({ user: req.params.user, property: req.params.property });
        if (isExist) {
            await Booking.findOneAndDelete({ user: req.params.user, property: req.params.property });
            res.json({ message: "Booking Canceled", deleted: true });
        } else {
            res.json({ message: "You have not booked the property yet", deleted: false });
        }
    } catch (error) {
        res.json(error);;
    }
}

exports.mybookings = async (req, res) => {
    if (req.params.type === "customer") {
        const bookings = await Booking.find({ user: req.userInfo._id }).populate('property').populate('user');
        console.log("aa", bookings)
        res.json(bookings);
    } else {
        const bookings = await Booking.find({ vendor: req.userInfo._id }).populate('property').populate('user');
        console.log("bb", bookings)
        res.json(bookings);
    }
}

exports.mybooking = async (req, res) => {
    const bookings = await Booking.find({ vendor: req.userInfo._id }).populate('property').populate('user');
    res.json(bookings);
}

exports.mybookingdone = async (req, res) => {
    const bookings = await Booking.find({ user: req.userInfo._id }).populate('property').populate('user');
    const filter = bookings.filter((data) => {
        if (data.accept) {
            return data;
        }
    })
    console.log(bookings)
    console.log(filter)
    res.json(filter);
}


// 
