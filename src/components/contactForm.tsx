"use client"

export default function ContactForm() {
    return <div>
        <h1>Love to hear from you,</h1>
        <h1>Get in touch 👋</h1>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div>
                <div>
                <p>Your name</p>
                <input type="text" placeholder="Enter Name"/>
                </div>
                <div>
                <p>Your email</p>
                <input type="text" placeholder="Enter Email"/>
                </div>
            </div>
            <p>Message</p>
            <textarea  rows={5} cols={82} placeholder="Let me know your thoughts"></textarea>
            <input type="submit" value="Just Send"/>
        </form>
    </div>
}