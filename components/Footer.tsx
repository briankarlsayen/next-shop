export const Footer = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-between">
      <div className="flex w-full justify-center m-auto py-32 flex-1 x-spacing"> 
        <div className="max-w-[40rem] text-center">
          <h2 className="text-header">Subscribe to our newsletter and receive the latest product news, stories, invitations to exclusive design events and much, much more.</h2>
          <div className="flex pt-10 pb-4">
            <input className="border-2 p-2 w-full outline-none" placeholder="Email Adress" />
            <p className="uppercase bg-gray-100 px-4 py-2">Subscribe</p>
          </div>
          <p className="text-subheader">By Subscribing, You Accept Our Privacy Policy</p>
        </div>
      </div>
      <div className="border-t-2"></div>
      <div className="x-spacing flex flex-wrap py-20 flex-1">
        <div className="lg:basis-1/4 basis-1/2">
          <p className="uppercase pb-2">Company</p>
          <ul className="footer-list">
            <li>What We Do</li>
            <li>Available Services</li>
            <li>Latest Posts</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="lg:basis-1/4 basis-1/2">
          <p className="uppercase pb-2">Customer Service</p>
          <ul className="footer-list">
            <li>What We Do</li>
            <li>Available Services</li>
            <li>Latest Posts</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="lg:basis-1/4 basis-1/2">
          <p className="uppercase pb-2">Social Media</p>
          <ul className="footer-list">
            <li>What We Do</li>
            <li>Available Services</li>
            <li>Latest Posts</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="lg:basis-1/4 basis-1/2">
          <p className="uppercase pb-2">Profile</p>
          <ul className="footer-list">
            <li>What We Do</li>
            <li>Available Services</li>
            <li>Latest Posts</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="flex items-end x-spacing py-4">
        <span className="text-4xl">LOGO</span>
        <p className="pl-2">2022 Qode Interactive, All Rights Reserved</p>
      </div>
    </section>
  )
}
