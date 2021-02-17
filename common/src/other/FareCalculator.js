export function FareCalculator(distance, time, rateDetails, fleetsPrices) {
	let price = null;
console.log('flettttttttttttttttttttts pricesssssssssssssssss',fleetsPrices)
	if (fleetsPrices && fleetsPrices.items.length && fleetsPrices.items[0].fields) {
		const dis = parseFloat(distance) / 1000;
		console.log('dissssssssssssssssssssssssss', dis)
		const data = fleetsPrices.items.find((item) => item.fields.fleetName === rateDetails.name);
		const filterPrice =
			data &&
			data.fields &&
			data.fields.fleetPrices.find((fleet) => dis >= fleet.fields.start && dis <= fleet.fields.end);

		if (!filterPrice) {fareCalculation
			price = { fields: { price: 0, returnPrice: 0 } };
			console.log('priceeeeeeeeeee innnnnnnnnnnnnnn', price);
		} else {
			price = filterPrice;
		}

		console.log('priceeeeeeeeeeeeeeeeeeeeeeeeeeeee', price);
	}

	// let baseCalculated = ((parseFloat(rateDetails.rate_per_kilometer) * (parseFloat(distance) / 1000))) + ((parseFloat(rateDetails.rate_per_hour) * (parseFloat(time) / 3600)));
	// let total = baseCalculated > parseFloat(rateDetails.min_fare) ? baseCalculated : parseFloat(rateDetails.min_fare);
	// let convenienceFee = (total*parseFloat(rateDetails.convenience_fees)/100);
	// let grand = total + convenienceFee;

	return {
		priceDetails: price
	};
}
