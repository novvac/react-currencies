import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const defaultOptions = {
    loop: true,
    autoplay: true,
}

function LottieControl({height='auto', width='auto', options=defaultOptions, data, ...rest}) {
    defaultOptions.animationData = data;

    return (
        <Lottie
            options={options}
            height={height}
            width={width}
            {...rest}
        />
    )
}

LottieControl.propTypes = {
    data: PropTypes.any.isRequired
}

export default LottieControl;