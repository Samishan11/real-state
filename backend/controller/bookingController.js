const Booking = require('../models/bookingModel');

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
}

exports.Update_Booking = async (req, res) => {
    try {
        const isExist = await Booking.findOne({ property: req.params.id });
        isExist.accept = req.body.accept
        isExist.save()
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

