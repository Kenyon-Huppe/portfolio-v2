import styles from './css/contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Reach Out</h2>
        <div className={styles.contentContainer}>
          <p>
              I'm currently open to new opportunities and would love to connect. 
              Whether you have an inquiry or just want to say hello, feel free to reach out. 
              I'll make sure to respond as soon as possible!
          </p>
          <p className={styles.bolden}>All fields are required when completing this form</p>
          <form action="https://formsubmit.co/2b281571dde7d11a5aa8a253618bde67" method="POST" id="contact-form">
              <div className={`${styles.inputContainer} ${styles.contactName}`}>
                <h4>
                  <label for="name" className={styles.inputLabel}>Name<span className={styles.requiredInput}>*</span></label>
                </h4>
                <input name="name" type="text" className={styles.textInput} id="name" required />
              </div>
              <div className={`${styles.inputContainer} ${styles.contactEmail}`}>
                <h4>
                  <label for="email" className={styles.inputLabel}>Email<span className={styles.requiredInput}>*</span></label>
                </h4>
                <input name="email" type="email" className={styles.textInput} id="email" required />
              </div>
              <div className={`${styles.inputContainer} ${styles.contactSubject}`}>
                <h4>
                  <label for="subject" className={styles.inputLabel}>Subject<span className={styles.requiredInput}>*</span></label>
                </h4>
                <input name="subject" type="text" className={styles.textInput} id="subject" required />
              </div>
              <div className={`${styles.inputContainer} ${styles.contactMessage}`}>
                <h4>
                  <label for="message" className={styles.inputLabel}>Message<span className={styles.requiredInput}>*</span></label>
                </h4>
                <textarea name="message" className={`${styles.textInput} ${styles.messageArea}`} id="message" required></textarea>
              </div>
              <button className={styles.btn} id="send-message">Send Message</button>
          </form>
        </div>
    </div>
  )
}
