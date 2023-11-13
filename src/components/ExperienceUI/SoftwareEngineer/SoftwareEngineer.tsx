import { Card } from 'src/components';
import AwardIcon from 'src/assets/svgs/award.svg';

export default function SoftwareEngineer() {
  return (
    <>
      <div style={{ backgroundColor: 'var(--color-primary)' }}>
        <p>
          Collaborated with Product, Design, and CS/CX to build data-driven
          features enabling our internal teams to better support our customers,
          create and track shipments, debug and handle error events, view
          metrics, and onboard organizations/clients.
        </p>
      </div>

      <Card style={{ backgroundColor: 'var(--color-gray)' }}>
        Handling strategic deployments, responding to sentry alerts, and
        researching for upcoming implementations.
      </Card>
      <div
        style={{
          backgroundColor: 'var(--color-dark)',
          color: 'var(--color-light)',
        }}
      >
        <div>
          <img
            style={{ width: 45, height: 45 }}
            src={AwardIcon}
            alt='Award Icon'
          />
          <p style={{ color: 'var(--color-light)' }}>Achievements</p>
        </div>

        <ul>
          <li>
            I surfaced critical business metrics through custom stats cards.
          </li>
          <li>I helped improve overall testing and stability.</li>
          <li>
            Developed reusable scalable components in accordance with design
            system.
          </li>
          <li>
            Introduced auto-generated API hooks helping to standardize fetching
            across Reperio's three applications.
          </li>
        </ul>
      </div>
    </>
  );
}
