import React from 'react';

const Page = ({activePage})=>(
    <div>
        {activePage === "HOME_PAGE" && <div>Home</div>} 
        {activePage === "RESUME_PAGE" &&<div>Resume</div>}
        {activePage === "SERVICE_PAGE" &&<div>Service</div>}
        {activePage === "BLOG_PAGE" &&<div>Blog</div>}
        {activePage === "CONTACT_PAGE" &&<div>Contact</div>}
    </div>
)
export default Page;