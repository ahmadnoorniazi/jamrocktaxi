import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseContext } from 'common';
import { GiConsoleController } from 'react-icons/gi';

const withPage = (WrappedComponent, pageSlug) => ({ ...props }) => {
	const { api } = useContext(FirebaseContext);
	const { pageLoad } = api;
	const dispatch = useDispatch();
	const pageState = useSelector((state) => {
		if (state.pagesData && state.pagesData[pageSlug]) {
			return state.pagesData[pageSlug];
		}
		return {};
	});

	useEffect(() => {
				dispatch(pageLoad("fleets"));

		dispatch(pageLoad(pageSlug));
	}, []);

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <WrappedComponent {...props} page={pageState} />;
};

export default withPage;
