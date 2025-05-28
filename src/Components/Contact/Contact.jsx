import React from "react";

const contactSection = {
  padding: "60px 20px",
  backgroundColor: "#f9f9f9",
};

const sectionStyle = {
  maxWidth: "600px",
  margin: "auto",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#d35400",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "20px",
};

const inputStyle = {
  padding: "12px 15px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
  resize: "none",
};

const buttonStyle = {
  padding: "12px 20px",
  fontSize: "16px",
  backgroundColor: "#d35400",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "background-color 0.3s ease",
};

const buttonHover = {
  backgroundColor: "#a63e00",
};

const footerStyle = {
  backgroundColor: "#d35400",
  padding: "15px",
  textAlign: "center",
};

function Contact() {
  const [btnHover, setBtnHover] = React.useState(false);

  return (
    <>
      <section id="contact" style={contactSection}>
        <div style={{ ...sectionStyle, margin: 0 }}>
          <div style={titleStyle}>Contact</div>
          <p style={{ margin: "24px 0", fontSize: "17px", color: "#444" }}>
            Let's get in touch and talk about your next project.
          </p>
          <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
            <input style={inputStyle} type="text" placeholder="Name" required />
            <input
              style={inputStyle}
              type="email"
              placeholder="Email"
              required
            />
            <input
              style={inputStyle}
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              style={{ ...inputStyle, minHeight: 90 }}
              placeholder="Message"
              required
            />
            <button
              type="submit"
              style={{
                ...buttonStyle,
                ...(btnHover ? buttonHover : {}),
              }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
      <footer style={footerStyle}>
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          style={{ color: "#fff", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          React Practise
        </a>
      </footer>
    </>
  );
}


export default Contact;