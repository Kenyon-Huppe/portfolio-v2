import styles from './css/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Reach Out</h2>
        <div className={styles.contactContentWrap}>
        <p>
            I'm currently open to new opportunities and would love to connect. 
            Whether you have an inquiry or just want to say hello, feel free to reach out. 
            I'll make sure to respond as soon as possible!
        </p>
        <form action="https://formsubmit.co/2b281571dde7d11a5aa8a253618bde67" method="POST" id="contact-form">
          <div class="name-email-wrap">
            <div className={`${styles.inputWrap} ${styles.contactName}`}>
              <label for="name" class="contact-label">Name<span className={styles.requiredInput}>*</span></label>
              <input name="name" type="text" class="text-place" id="name" required />
            </div>
            <div className={`${styles.inputWrap} ${styles.contactEmail}`}>
              <label for="email" class="contact-label">Email<span className={styles.requiredInput}>*</span></label>
              <input name="email" type="email" class="text-place" id="email" required />
            </div>
            </div>
            <div className={`${styles.inputWrap} ${styles.contactSubject}`}>
              <label for="subject" class="contact-label">Subject<span className={styles.requiredInput}>*</span></label>
              <input name="_subject" type="text" class="text-place" id="subject" required />
            </div>
            <div className={`${styles.inputWrap} ${styles.contactMessage}`}>
              <label for="message" class="contact-label">Message<span className={styles.requiredInput}>*</span></label>
              <textarea name="message" class="text-place" id="message" required></textarea>
            </div>
            <button class="btn" id="send-message">Send Message</button>
        </form>
        </div>
    </div>
  )
}
