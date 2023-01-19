const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="titel-2">Location</h2>
            <p>Ukraine, Kiyv</p>
          </li>
        </ul>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="titel-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+380000000000">+3 8(000) 0000000</a>
            </p>
          </li>
        </ul>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="titel-2">Email</h2>
            <p>
              <a href="mailto:xxxxxxxxxxxx@gmail.com">xxxxxxxxxxxx@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
