import React from "react";

function Manzil() {
  return (
    <div name="manzil" className="pt-20">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center font-mono font-semibold mt-3">
          O'quv Markazlarimiz
        </h1>
      </div>
      <div className="w-[80%] lg:flex justify-center mx-auto my-10">
        <div>
          <h1 className="text-xl font-medium mt-10">1-Filial</h1>
          <p className="w-[90%] text-lg mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            molestiae vero adipisci perferendis, iste eum et voluptates ipsum
            dolores quaerat!{" "}
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.8093628218357!2d71.6758107!3d40.9981757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4d005a97f19d%3A0xe2fa3ed041c1f74c!2sNew%20OXFORD%20-%20o&#39;quv%20markazi%20(Asosiy)!5e0!3m2!1sen!2s!4v1705591458587!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            className="mt-10 lg:mt-0 w-78 md:w-96 lg:w-[400px]  h-[200px]"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Manzil;
