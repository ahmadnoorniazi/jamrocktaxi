import { CONFIRM_BOOKING, CONFIRM_BOOKING_SUCCESS, CONFIRM_BOOKING_FAILED, CLEAR_BOOKING } from '../store/types';
import  nodemailer from 'nodemailer';
import ejs from "ejs";

export const clearBooking = () => (dispatch) => (firebase) => {
	dispatch({
		type: CLEAR_BOOKING,
		payload: null
	});
};



const sendEmail= async (dataParams) => {

				const dest = dataParams.dest
        const data = await ejs.renderFile(__dirname + "/emailTemplate.ejs", dataParams);
        let transporter = nodemailer.createTransport({
           service: "gmail",
            auth: {
              user: "ahmadnoor95m@gmail.com",
              pass: "Ahmad123!"
            }
          });
        const destList = [dest,"hello@jamrocktaxi.com"]
        destList.forEach(mailAddress => {
            const mailOptions = {
                from: `JamRockTaxi #${dataParams.bookingKey || "q2erd5"} <jamrocktaxi@gmail.com>`, // Something like: Jane Doe <janedoe@gmail.com>
                to: mailAddress,
                subject: 'Booking Details', // email subject
                html: data
            };

            // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return erro.toString();
            }
						console.log("comesssssss to success")
            return 'Sended';
        });
			});

}

export const addBooking = (bookingData, email) => (dispatch) => (firebase) => {
	const { bookingRef } = firebase;

	dispatch({
		type: CONFIRM_BOOKING,
		payload: bookingData
	});
	let pickUp = {
		lat: bookingData.pickup.coords.lat,
		lng: bookingData.pickup.coords.lng,
		add: bookingData.pickup.description
	};
	let drop = {
		lat: bookingData.drop.coords.lat,
		lng: bookingData.drop.coords.lng,
		add: bookingData.drop.description
	};
	var otp;
	if (bookingData.settings.otp_secure) otp = Math.floor(Math.random() * 90000) + 10000;
	else {
		otp = false;
	}
	let today = new Date().toString();

	var data = {
		carType: bookingData.carDetails.name,
		carImage: bookingData.carDetails.image,
		customerData: bookingData.userDetails,
		drop: drop,
		pickup: pickUp,
		status: 'NEW',
		bookLater: bookingData.bookLater,
		tripdate: bookingData.bookLater ? bookingData.tripdate : today,
		bookingDate: today,
		otp: otp,
		booking_type_web: bookingData.booking_type_web,
		tripData:bookingData.tripData || {}
	};

	bookingRef
		.push(data)
		.then((res) => {
			console.log(email,'rrrrrrres from firebase',res)
			var bookingKey = res.key;
			dispatch({
				type: CONFIRM_BOOKING_SUCCESS,
				payload: {
					booking_id: bookingKey,
					mainData: data
				}
			});
			console.log("emailllll", email)
			sendEmail({...bookingData, bookingKey})
		})
		.catch((error) => {
			dispatch({
				type: CONFIRM_BOOKING_FAILED,
				payload: error.code + ': ' + error.message
			});
		});
};
