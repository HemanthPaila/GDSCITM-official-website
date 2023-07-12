import "./feedback.css"
export default function feedback()
{
    return(
        <div className="feedback-container">
            <div className="feedback-heading">Have feedback? <span className="feedback-heading-part">We would love to hear it :)</span></div>
            <p className="feedback-passage">Reach out to us & get the change to become a part of community.GDSC focuses upon building techinical and non-techinical skills,which would help students to built better community.</p>
            <div className="your-feedback-container">
                <div className="your-feedback-heading">Give us your feedback</div>
                <input type="text" placeholder="Write here..." />
                <div className="feedback-wordcount">0/100</div>
            </div>
            <div className="faq-container">
                <div className="faq-heading">FAQs</div>
                <div className="question">Q. What is GDSC?</div>
                <div className="question">Q. What is GDSC?</div>
                <div className="question">Q. What is GDSC?</div>
            </div>
        </div>
    )
}