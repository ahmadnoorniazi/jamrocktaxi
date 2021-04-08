import React,{ useState, useEffect, useContext } from 'react';
import MaterialTable from 'material-table';
import CircularLoading from "../components/CircularLoading";
import { useSelector, useDispatch } from "react-redux";
import ConfirmationDialogRaw from '../components/ConfirmationDialogRaw';
import {
  features,
  dateStyle,
  language
} from 'config';
import { FirebaseContext } from 'common';

const BookingHistory = () => {
  const { api } = useContext(FirebaseContext);
  const {
    cancelBooking
  } = api;
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [role, setRole] = useState(null);

  const columns =  [
      { title: language.booking_id, field: 'id' },
      { title: "Pickup Date", field: 'pickup_date', render: rowData => rowData.tripData && rowData.tripData.startData ? new Date(rowData.tripData.startData).toDateString(dateStyle): null},
      { title: "Pickup Time", field: 'pickup_time', render: rowData => rowData.tripData && rowData.tripData.startData ? new Date(rowData.tripData.startData).toLocaleTimeString(): null},
      { title: "Return Date", field: 'return_date', render: rowData => rowData.tripData && rowData.tripData.returnDate ? new Date(rowData.tripData.returnDate).toDateString(dateStyle): null},
      { title: "Return Time", field: 'return_time', render: rowData => rowData.tripData && rowData.tripData.returnDate ? new Date(rowData.tripData.returnDate).toLocaleTimeString(): null},
      { title: language.car_type, field: 'carType' },
      { title: language.booking_date, field: 'tripdate'},
      { title: 'Pax', field: 'pax',  render: rowData => rowData.tripData && rowData.tripData.pax   ? rowData.tripData.pax : 0  },
      { title: "Bags", field: 'bags', render: rowData => rowData.tripData && rowData.tripData.bags   ? rowData.tripData.bags : 0   },
      { title: "Flight Number", field: 'flightNumber', render: rowData => rowData.tripData && rowData.tripData.flightNumber   ? rowData.tripData.flightNumber : "" },
      { title: "Journey", field: 'journey', render: rowData => rowData.tripData && rowData.tripData.journey   ? rowData.tripData.journey : "" },
      { title: "Return Booking", field: 'return_booking', render: rowData => rowData.tripData && rowData.tripData.isReturn   ? 'Yes Return' : "Yes Pickup" },
      { title: "Extras", field: 'extras', render: rowData => rowData.tripData && Array.isArray(rowData.tripData.extras) ? rowData.tripData.extras.reduce((acc, curr) => acc += `${curr.title}(${Object.values(curr.options).join(',')})`, "") : ""},
      { title: "Extras Cost", field: 'extrasCost', render: rowData => rowData.tripData && Array.isArray(rowData.tripData.extras) ? `$${rowData.tripData.extras.reduce((acc, curr) => acc += curr.price * curr.quantity, 0)}` : ""},
      { title: "Payment Status", field: 'paymentStatus', render: rowData => rowData.tripData && rowData.tripData.paymentStatus   ? rowData.tripData.paymentStatus : "" },
      { title: language.customer_name,field: 'customer_name', render: rowData => rowData.customerData && rowData.customerData.firstName   ? `${rowData.customerData.firstName}  ${rowData.customerData.lastName}`: null },
      { title: language.pickup_address, field: 'pickupAddress' },
      { title: language.drop_address, field: 'dropAddress' },
      { title: language.assign_driver, field: 'driver_name' },
      { title: language.booking_status, field: 'status', render: rowData => <span>{language[rowData.status]}</span> },
      { title: language.otp, field: 'otp', render: rowData => rowData.status ==='NEW' || rowData.status === 'ACCEPTED' ?<span>{rowData.otp}</span>:null },
      { title: language.trip_cost, field: 'trip_cost', render: rowData => rowData.tripData && rowData.tripData.totalCost   ? rowData.tripData.totalCost : 0 },
      { title: language.trip_start_time, field: 'trip_start_time'},
      { title: language.trip_end_time, field: 'trip_end_time' },
      { title: language.vehicle_no, field: 'vehicle_number' },
      { title: language.trip_cost_driver_share, field: 'driver_share'},
      { title: language.convenience_fee, field: 'convenience_fees'},
      { title: language.discount_ammount, field: 'discount'},
      { title: language.Customer_paid, field: 'customer_paid',  render: rowData => rowData.tripData && rowData.tripData.totalCost   ? rowData.tripData.totalCost : 0 },
      { title: language.payment_mode, field: 'payment_mode'},
      { title: language.payment_gateway, field: 'gateway'},
      { title: language.cash_payment_amount, field: 'cashPaymentAmount'},
      { title: language.card_payment_amount, field: 'cardPaymentAmount'},
      { title: language.wallet_payment_amount, field: 'usedWalletMoney'},
  ];
  const [data, setData] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState('');
  const bookinglistdata = useSelector(state => state.bookinglistdata);
  console.log("bookinglistdata", bookinglistdata)
  useEffect(()=>{
        if(bookinglistdata.bookings){
            setData(bookinglistdata.bookings);
        }else{
          setData([]);
        }
  },[bookinglistdata.bookings]);

  useEffect(() => {
    if(auth.info && auth.info.profile){
      setRole(auth.info.profile.usertype);
    }
  }, [auth.info]);

  const onConfirmClose=(value)=>{
    if(value){
      dispatch(cancelBooking({
        reason:value,
        booking:selectedBooking
      }));
    }
    setOpenConfirm(false);
  }

  return (
    bookinglistdata.loading? <CircularLoading/>:
    <div>
    <MaterialTable
      title={language.booking_title}
      columns={columns}
      data={data}
      options={{
        actionsColumnIndex: -1
      }}
      actions={[
        rowData => ({
          icon: 'cancel',
          tooltip: language.cancel_booking,
          disabled: rowData.status==='NEW' || rowData.status==='ACCEPTED'? false:true,
          onClick: (event, rowData) => {
            if(features.AllowCriticalEditsAdmin && (role==='rider' || role ==='admin')){
              setSelectedBooking(rowData);
              setOpenConfirm(true);
            }else{
              alert(language.demo_mode);
            }
          }
        }),
      ]}
    />
    <ConfirmationDialogRaw
      open={openConfirm}
      onClose={onConfirmClose}
      value={''}
    />
    </div>

  );
}

export default BookingHistory;
