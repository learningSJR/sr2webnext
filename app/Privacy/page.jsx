import React from "react";

const Privacy = () => {
  const lastUpdated = "August 21, 2025"; // update when you revise the policy
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "changes", label: "Changes to This Privacy Policy" },
    { id: "collection", label: "Information We Collect" },
    { id: "use", label: "How We Use Your Information" },
    { id: "whatsapp", label: "WhatsApp Policy" },
    { id: "refunds", label: "Refund Policy" },
    { id: "disclosure", label: "Disclosure of Your Information" },
    { id: "security", label: "Security of Your Information" },
    { id: "thirdparty", label: "Third‑Party Links" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            SR2 Edge <span className="text-gray-400">•</span> Privacy Policy
          </h1>
          <span className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[260px_1fr]">
        {/* TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-20 rounded-2xl border bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              On this page
            </p>
            <ul className="space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-md px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <article className="prose prose-gray max-w-none prose-headings:scroll-mt-24">
          {/* Overview */}
          <section id="overview" className="scroll-mt-24">
            <h2>Overview</h2>
            <p className="lead">
              Welcome to <strong>SR2 Edge</strong>. Explore our offices
              worldwide and learn how we protect your data.
            </p>
            <p>
              This Privacy Policy describes how <strong>SR2 Edge</strong> (the
              “Site”, “we”, “us”, or “our”) collects, uses, and discloses your
              personal information when you visit, use our services, or
              otherwise communicate with us (collectively, the “Services”). By
              using our Services, you agree to this Privacy Policy. If you do
              not agree, please do not use the Services.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="scroll-mt-24">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our practices or for other operational, legal, or
              regulatory reasons. We will post the revised Privacy Policy on
              this page and update the <em>Last updated</em> date above.
            </p>
          </section>

          {/* Collection */}
          <section id="collection" className="scroll-mt-24">
            <h2>Information We Collect</h2>
            <p>
              We collect personal information from a variety of sources. The
              information we collect depends on how you interact with the Site
              and the Services.
            </p>
            <h3>Information You Provide Directly</h3>
            <ul>
              <li>Contact details: name, address, phone number, email.</li>
              <li>
                Order details: billing/shipping address, payment confirmation,
                email, phone number.
              </li>
              <li>
                Account information: username, password, security questions.
              </li>
              <li>
                Shopping activity: items viewed, added to cart, or saved to
                wishlist.
              </li>
              <li>
                Customer support: information you include when communicating
                with us.
              </li>
            </ul>
            <h3>Information Collected Automatically</h3>
            <p>
              We automatically collect certain information about your
              interaction with the Services (“Usage Data”), using cookies,
              pixels, and similar technologies. Usage Data may include device
              and browser information, IP address, network details, and how you
              interact with the Site.
            </p>
            <h3>Information from Third Parties</h3>
            <p>
              We may receive information from vendors and service providers who
              support our Site and Services (e.g., hosting, analytics,
              payments), payment processors (for processing your transactions),
              and through online tracking technologies (such as web beacons and
              SDKs). Any information we obtain from third parties will be
              treated in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Use */}
          <section id="use" className="scroll-mt-24">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>
                <strong>Providing Products and Services:</strong> process
                payments, fulfill orders, manage accounts, ship items, and
                handle returns.
              </li>
              <li>
                <strong>Marketing and Advertising:</strong> send promotional
                communications and personalize content and ads.
              </li>
              <li>
                <strong>Security and Fraud Prevention:</strong> detect,
                investigate, and prevent fraudulent, illegal, or malicious
                activity.
              </li>
              <li>
                <strong>Communications & Support:</strong> respond to inquiries,
                provide support, and improve our Services.
              </li>
              <li>
                <strong>Compliance:</strong> satisfy legal obligations and
                enforce our terms.
              </li>
            </ul>
          </section>

          {/* WhatsApp */}
          <section id="whatsapp" className="scroll-mt-24">
            <h2>WhatsApp Policy</h2>
            <p>
              If you use our WhatsApp Business services via the Site, we may
              collect your name, email, phone number, and shipping address to
              manage orders, communicate with you (support and updates), and
              prevent fraud.
            </p>
          </section>

          {/* Refunds */}
          <section id="refunds" className="scroll-mt-24">
            <h2>Refund Policy</h2>
            <p>
              Refunds are processed to your original payment method within{" "}
              <strong>3 to 5 business days</strong> after approval.
            </p>
          </section>

          {/* Disclosure */}
          <section id="disclosure" className="scroll-mt-24">
            <h2>Disclosure of Your Information</h2>
            <ul>
              <li>
                <strong>By Law or to Protect Rights:</strong> We may disclose
                information to comply with legal processes or protect rights and
                safety.
              </li>
              <li>
                <strong>Service Providers:</strong> We share information with
                trusted vendors who help operate our Services.
              </li>
              <li>
                <strong>Business Transfers:</strong> Your information may be
                transferred in connection with a merger, acquisition, or sale of
                assets.
              </li>
            </ul>
          </section>

          {/* Security */}
          <section id="security" className="scroll-mt-24">
            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical safeguards to help
              protect your personal information. However, no system is
              completely secure, and we cannot guarantee absolute security of
              your data.
            </p>
          </section>

          {/* Third‑Party Links */}
          <section id="thirdparty" className="scroll-mt-24">
            <h2>Third‑Party Links</h2>
            <p>
              Our Site may include links to third‑party websites. We are not
              responsible for the privacy practices or content of those sites.
              Please review their privacy policies before providing any personal
              information.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:privacy@sr2edge.com">privacy@sr2edge.com</a>
              </li>
              <li>Address: SR2 Edge, [Insert Office Address]</li>
            </ul>
          </section>

          <div className="mt-12 rounded-xl border bg-emerald-50 p-4 text-emerald-800">
            <p className="text-sm">
              Tip: Replace placeholders (email, address) and review with your
              legal counsel for regional compliance (e.g., GDPR, CCPA) if
              applicable.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} SR2 Edge. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
