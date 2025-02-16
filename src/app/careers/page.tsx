import Link from "next/link"

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Careers at The Raeburn Group</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="mb-4">
          At The Raeburn Group, we're always looking for talented individuals to join our diverse team of innovators,
          entrepreneurs, and industry experts. If you're passionate about making a difference and thrive in a dynamic,
          fast-paced environment, we want to hear from you.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Opportunity to work with cutting-edge technologies across various industries</li>
          <li className="mb-2">Collaborative and innovative work culture</li>
          <li className="mb-2">Competitive compensation and benefits packages</li>
          <li className="mb-2">Professional development and growth opportunities</li>
          <li>Chance to make a real impact on the future of business and technology</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <p className="mb-4">
          To view our current job openings and apply, please visit our dedicated recruitment website:
        </p>
        <Link
          href="https://theraeburngroup-recruitment.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
        >
          View Job Openings
        </Link>
      </section>
    </div>
  )
}

