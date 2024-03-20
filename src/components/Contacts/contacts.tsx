// import emailjs from "emailjs-com";

const Contacts = () => {
    // const onSubmit = (data, r) => {
    //   sendEmail(
    //     serviceID,
    //     templateID,
    //     {
    //       name: data.name,
    //       phone: data.phone,
    //       email: data.email,
    //       subject: data.subject,
    //       description: data.description,
    //     },
    //     userID
    //   );
    //   r.target.reset();
    // };

    // const sendEmail = (serviceID, templateID, variables, userID) => {
    //   emailjs
    //     .send(serviceID, templateID, variables, userID)
    //     .then(() => {
    //       setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
    //     })
    //     .catch((err) => console.error(`Something went wrong ${err}`));
    // };

    return (
        <div id='contacts' className='contacts'>
            <div className='text-center'>
                <h1>contact me</h1>
                <p>You can fill out this form and I&apos;ll contact you as soon as possible.</p>
            </div>
            <div className='container'></div>
        </div>
    );
};

export default Contacts;
