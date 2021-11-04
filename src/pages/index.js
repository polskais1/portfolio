import * as React from 'react';
import '../styles.css';
import { CurrentWorkplace, FormerWorkplace } from '../components/Workplace';
import header from '../images/header.jpg';
import mongoBackground from '../images/header.jpg';
import viceBackground from '../images/header.jpg';
import spotibleBackground from '../images/header.jpg';
import lettrsBackground from '../images/header.jpg';
import me from '../images/me.jpg';

// /* Color Theme Swatches in Hex */
// .“Reviure”-reform-and-rental-program-1-hex { color: #F2A2CE; }
// .“Reviure”-reform-and-rental-program-2-hex { color: #049DD9; }
// .“Reviure”-reform-and-rental-program-3-hex { color: #60A62E; }
// .“Reviure”-reform-and-rental-program-4-hex { color: #F2EFDF; }
// .“Reviure”-reform-and-rental-program-5-hex { color: #F28705; }

// /* Color Theme Swatches in RGBA */
// .“Reviure”-reform-and-rental-program-1-rgba { color: rgba(242, 162, 206, 1); }
// .“Reviure”-reform-and-rental-program-2-rgba { color: rgba(4, 156, 216, 1); }
// .“Reviure”-reform-and-rental-program-3-rgba { color: rgba(96, 165, 46, 1); }
// .“Reviure”-reform-and-rental-program-4-rgba { color: rgba(242, 239, 222, 1); }
// .“Reviure”-reform-and-rental-program-5-rgba { color: rgba(242, 135, 4, 1); }

// /* Color Theme Swatches in HSLA */
// .“Reviure”-reform-and-rental-program-1-hsla { color: hsla(326, 75, 79, 1); }
// .“Reviure”-reform-and-rental-program-2-hsla { color: hsla(196, 96, 43, 1); }
// .“Reviure”-reform-and-rental-program-3-hsla { color: hsla(95, 56, 41, 1); }
// .“Reviure”-reform-and-rental-program-4-hsla { color: hsla(50, 43, 91, 1); }
// .“Reviure”-reform-and-rental-program-5-hsla { color: hsla(33, 96, 48, 1); }


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "utopia-std, serif",
  maxWidth: 864,
  margin: 'auto',
  padding: 20,
  // backgroundColor: '#F2EFDF',
};
const headingContainerStyles = {
  backgroundBlendMode: 'darken',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  backgroundImage: `url(${header})`,
  backgroundSize: 'cover',
  backgroundPositionY: '150px',
  border: '#F2EFDF 10px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
};
const headingStyles = {
  textAlign: 'center',
  fontSize: '34px',
  fontFamily: 'utopia-std-display, serif',
  fontStyle: 'italic',
  color: '#F2A2CE',
};
const subHeadingStyles = {
  // color: '#663399',
  color: '#049DD9',
  textAlign: 'right',
};
const sectionHeadingStyles = {
  textAlign: 'center',
}
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const meStyles = {
  width: '100%',
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Paweł Fielek</title>
      {/* <img
        alt="me"
        src={me}
        style={meStyles}
      /> */}
      <div style={headingContainerStyles}>
        <h1 style={headingStyles}>Your comrade in code</h1>
      </div>
      <h2 style={subHeadingStyles}>
        My name is Paweł<br />
        It's nice to meet you!<br />
        I engineer software<span role="img" aria-label="Laptop emoji">💻</span><br />
        take photos<span role="img" aria-label="Camera emoji">📸</span><br />
        and organize with others<span role="img" aria-label="Handshake emoji">🤝</span>
      </h2>
      {/* <h3 style={sectionHeadingStyles}>The software I've engineered</h3> */}
      <FormerWorkplace
        name="MongoDB"
        img={mongoBackground}
        copy="The world's most popular document database." />
      <FormerWorkplace
        name="Vice"
        img={viceBackground}
        copy="Small team. Big media." />
      <FormerWorkplace
        name="Spotible"
        img={spotibleBackground}
        copy="Digital advertising boutique." />
      <FormerWorkplace
        name="Lettrs"
        img={lettrsBackground}
        copy="Social media for letter writers." />
      <h3 style={sectionHeadingStyles}>The photos I've taken</h3>
      <h3 style={sectionHeadingStyles}>The people I've organized with</h3>
    </main>
  );
};

export default IndexPage;
