import React from "react";
import Navbar from "../Components/Navbar";
import twogirls from "../Assets/twogirls.png";
import FAQimg from "../Assets/FAQ.jpg";
import supportImage from "../Assets/callsupport.png";
import Address from "../Assets/Address.png";
import chat from "../Assets/chatwithus.png";

const FAQ = () => {
  return (
    <div className="bg-background text-foreground ">
      <header
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${FAQimg})` }} 
      >
        <Navbar />
        <div className="relative z-10 flex items-center justify-center h-full ">
          <h1 className="text-4xl text-white font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </header>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#EDF7F5] mt-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Have Any Questions?</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <img src={twogirls} alt="girls" className="girls" />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-8">
              <h3 className="text-xl font-semibold mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <details className="bg-card p-4 rounded-lg shadow">
                  <summary className="cursor-pointer font-medium">
                    Make A Difference In The Life Of A Child
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Learn how you can donate, volunteer, or adopt a child in
                    need.
                  </p>
                </details>
                <details className="bg-card p-4 rounded-lg shadow">
                  <summary className="cursor-pointer font-medium">
                    Let's Do The Right Thing Now
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Find out how you can contribute to our cause.
                  </p>
                </details>
                <details className="bg-card p-4 rounded-lg shadow">
                  <summary className="cursor-pointer font-medium">
                    Can I Donate Anonymously?
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Yes, you can choose to donate anonymously.
                  </p>
                </details>
                <details className="bg-card p-4 rounded-lg shadow">
                  <summary className="cursor-pointer font-medium">
                    Join Your Hand With Us For A Better Life
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Become a volunteer and help us in our mission.
                  </p>
                </details>
                <details className="bg-card p-4 rounded-lg shadow">
                  <summary className="cursor-pointer font-medium">
                    How Do I Cancel My Recurring Donation?
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Contact our support team to cancel your recurring donation.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            style={{ textAlign: "left" }}
            className="text-2xl font-semibold mb-4 text-secondary-foreground"
          >
            Still Need Help
          </h2>
          <p
            style={{ textAlign: "left" }}
            className="text-muted-foreground mb-8"
          >
            We enjoy adapting our strategies to offer every client <br></br>the
            best solutions that are at the forefront of the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-[#EDF7F5] p-10 rounded">
              <img
                src={supportImage}
                alt="Call Support"
                className="w-12 h-12"
              />
              <h3 className="font-semibold text-lg text-secondary-foreground">
                Call Support
              </h3>
              <p className="text-muted-foreground">
                We analyze your websitic sketches, internet architecture, and
                other key elements.
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#EDF7F5] p-10 rounded">
              <img src={chat} alt="chat" className="w-12 h-12" />
              <h3 className="font-semibold text-lg text-secondary-foreground">
                Chat With Us
              </h3>
              <p className="text-muted-foreground">
                We are known for our industry-leading technical capabilities.
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#EDF7F5] p-10 rounded">
              <img src={Address} alt="Address" className="w-12 h-12" />
              <h3 className="font-semibold text-lg text-secondary-foreground">
                Address
              </h3>
              <p className="text-muted-foreground">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
