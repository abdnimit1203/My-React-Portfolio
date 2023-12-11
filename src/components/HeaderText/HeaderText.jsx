import PropTypes from "prop-types";
const HeaderText = ({text1,text2}) => {
    return (
        <div className="flex justify-center flex-col items-center gap-2 my-10 md:my-20">
            <h4 className="">{text1}</h4>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">{text2}</h1>
        </div>
    );
};
HeaderText.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
  };
export default HeaderText;