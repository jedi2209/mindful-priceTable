import './App.css';

const CheckBoxSvg = ({className = null}) => (
  <svg className={className} viewBox="0 0 24 24">
    {className !== 'not-included' ? (
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
    ) : (
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/>
    )}
  </svg>
);

const IconRow = () => (
  <svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z"/></svg>
);

const TableRow = ({title, data = []}) => (
  <tr>
    <td>{title}</td>
    {data.map(el => (<td><CheckBoxSvg className={el} /></td>))}
  </tr>
);

const PackageInfo = ({price = null, value = null, popular = false, currency = '€', buttonText = 'Get started', link = null}) => (
<div className="info">
  {popular && <div className="popular">Popular</div>}
  <div className="amount">{price} {currency}</div>
  <div className="billing-msg">value {value} {currency}</div>
  <button type="button">{buttonText}</button>
</div>
);

const App = () => (
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
              <PackageInfo price={250} value={280} popular={true}/>
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
          <TableRow title={'Attend 60 min. and 90 min. group classes'} data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title={'Complimentary herbal tea after each class'} data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title={'Exclusive access to monthly wellness newsletters'} data={['starter', 'seeker', 'explorer', 'eternal']} />

          <TableRow title={'Free access to one special event per quarter (e.g., guest instructor sessions, themed yoga nights)'} data={['not-included', 'seeker', 'explorer', 'eternal']} />
          <TableRow title={'One free group class'} data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title={'Priority booking for all classes and events'} data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title={'Special birthday gift (e.g., free class, yoga accessories)'} data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title={'Invitation to exclusive members-only retreats and events'} data={['not-included', 'not-included', 'explorer', 'eternal']} />
          
          <TableRow title={'Posibility to freeze the package for 1 month'} data={['not-included', 'not-included', 'explorer', 'eternal']} />
          <TableRow title={'One free private sessions with an instructor'} data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <TableRow title={'Complimentary guest passes (2 per year)'} data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <TableRow title={'Personalized wellness consultation annually'} data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <TableRow title={'VIP access to all events, including a special annual gratitude event for Eternal Yogis'} data={['not-included', 'not-included', 'not-included', 'eternal']} />
          <tr colSpan="5"><td className="colRow">Additional Perks for All Members</td></tr>
          <TableRow title={'Referral Bonus: Bring a friend, and both receive 10% off for the next yoga class package or ice bath package'} data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title={'Birthday Reward: Enjoy a free yoga class or ice bath session during your birthday month'} data={['starter', 'seeker', 'explorer', 'eternal']} />
          <TableRow title={'Discount System: Receive 15% off the next yoga class package or ice bath package for every review written, and social media mention'} data={['starter', 'seeker', 'explorer', 'eternal']} />
        </tbody>
      </table>
    </div>
  </div>
);

export default App;
