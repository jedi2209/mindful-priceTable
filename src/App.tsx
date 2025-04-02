import React from 'react';
import './App.css';

// Components
import { TableRow } from '@components/TableRow';
import { PackageInfo } from '@components/PackageInfo';
import { IconRow } from '@components/IconRow';

// Hooks
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>
                <div>
                  {t('select_option')}
                  <div className="svg-wrapper">
                    <IconRow />
                  </div>
                </div>
              </th>
              <th>
                <div className="heading">{t('zen_starter')}<br /><br /></div>
                <PackageInfo price={100} value={110} />
              </th>
              <th>
                <div className="heading">{t('serenity_seeker')}</div>
                <PackageInfo price={250} value={280} popular={true} />
              </th>
              <th>
                <div className="heading">{t('enlightened_explorer')}</div>
                <PackageInfo price={400} value={450} />
              </th>
              <th>
                <div className="heading">{t('eternal_yogi')}<br /><br /></div>
                <PackageInfo price={600} value={700} />
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow title={t('attend_classes')} data={['starter', 'seeker', 'explorer', 'eternal']} />
            <TableRow title={t('herbal_tea')} data={['starter', 'seeker', 'explorer', 'eternal']} />
            <TableRow title={t('monthly_newsletters')} data={['starter', 'seeker', 'explorer', 'eternal']} />
            <TableRow title={t('special_event')} data={['not-included', 'seeker', 'explorer', 'eternal']} />
            <TableRow title={t('free_group_class')} data={['not-included', 'not-included', 'explorer', 'eternal']} />
            <TableRow title={t('priority_booking')} data={['not-included', 'not-included', 'explorer', 'eternal']} />
            <TableRow title={t('birthday_gift')} data={['not-included', 'not-included', 'explorer', 'eternal']} />
            <TableRow title={t('exclusive_retreats')} data={['not-included', 'not-included', 'explorer', 'eternal']} />
            <TableRow title={t('freeze_package')} data={['not-included', 'not-included', 'explorer', 'eternal']} />
            <TableRow title={t('private_session')} data={['not-included', 'not-included', 'not-included', 'eternal']} />
            <TableRow title={t('guest_passes')} data={['not-included', 'not-included', 'not-included', 'eternal']} />
            <TableRow title={t('wellness_consultation')} data={['not-included', 'not-included', 'not-included', 'eternal']} />
            <TableRow title={t('vip_access')} data={['not-included', 'not-included', 'not-included', 'eternal']} />
            <tr>
              <td className="colRow" colSpan={5}>{t('additional_perks')}</td>
            </tr>
            <TableRow title={t('referral_bonus')} data={['starter', 'seeker', 'explorer', 'eternal']} />
            <TableRow title={t('birthday_reward')} data={['starter', 'seeker', 'explorer', 'eternal']} />
            <TableRow title={t('discount_system')} data={['starter', 'seeker', 'explorer', 'eternal']} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;