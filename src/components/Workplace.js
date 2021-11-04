import * as React from "react"

const imageStyles = {
  backgroundBlendMode: 'darken',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backgroundSize: 'cover',
  backgroundPositionY: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '230px',
};
const nameStyles = {
  color: '#F2EFDF',
  fontFamily: 'utopia-std-display, serif',
  fontSize: '36px',
};
const copyStyles = {
  backgroundColor: '#F2EFDF',
  // color: '#F28705',
  fontFamily: 'utopia-std-caption, serif',
  textAlign: 'center',
  padding: '20px',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  marginBottom: '20px',
};

const CurrentWorkplace = () => (
  <div></div>
);

const FormerWorkplace = ({ name, img, copy }) => (
  <>
    <div style={{ ...imageStyles, backgroundImage: `url(${img})` }}>
      <label style={nameStyles}>
        {name}
      </label>
    </div>
    <div style={copyStyles}>
      {copy}
    </div>
  </>
);

export { CurrentWorkplace, FormerWorkplace };
