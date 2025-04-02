import React from 'react';
import './App.css';
import { TableRow } from '@components/TableRow';
import { PackageInfo } from '@components/PackageInfo';

const IconRow: React.FC = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z" />
  </svg>
);

const App: React.FC = () => (
  <div className="container">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>
              <div>
                Select your option
                <div className="svg-wrapper">
                  <IconRow />
                </div>
              </div>
            </th>
            <th>
              <div className="heading">Zen Starter<br /><br /></div>
              <PackageInfo price={100} value={110} />
            </th>
            <th>
              <div className="heading">Serenity Seeker</div>
              <PackageInfo price={250} value={280} popular={true} />
            </th>
            <th>
              <div className="heading">Enlightened Explorer</div>
              <PackageInfo price={400} value={450} />
            </th>
            <th>
              <div className="heading">Eternal Yogi<br /><br /></div>
              <PackageInfo price={600} value={700} />
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow title="Attend 60 min. and 90 min. group classes" data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title="Complimentary herbal tea after each class" data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title="Exclusive access to monthly wellness newsletters" data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title="Free access to one special event per quarter (e.g., guest instructor sessions, themed yoga nights)" data={['not-included', 'seeker', 'explorer', 'eternal']} />
          <TableRow title="One free group class" data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title="Priority booking for all classes and events" data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title="Special birthday gift (e.g., free class, yoga accessories)" data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title="Invitation to exclusive members-only retreats and events" data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title="Posibility to freeze the package for 1 month" data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title="One free private sessions with an instructor" data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <TableRow title="Complimentary guest passes (2 per year)" data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <TableRow title="Personalized wellness consultation annually" data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <TableRow title="VIP access to all events, including a special annual gratitude event for Eternal Yogis" data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <tr>
            <td className="colRow" colSpan={5}>Additional Perks for All Members</td>
          </tr>
          <TableRow title="Referral Bonus: Bring a friend, and both receive 10% off for the next yoga class package or ice bath package" data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title="Birthday Reward: Enjoy a free yoga class or ice bath session during your birthday month" data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title="Discount System: Receive 15% off the next yoga class package or ice bath package for every review written, and social media mention" data={['starter', 'seeker', 'explorer', 'eternal']} />
        </tbody>
      </table>
    </div>
  </div>
);

export default App;