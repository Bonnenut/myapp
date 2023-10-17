import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '大鹅技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Goose Design Pro',
          title: '该吃午饭',
          href: 'https://c-ssl.duitang.com/uploads/item/201903/05/20190305191812_sU8VA.jpeg',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Goose User Center',
          title: 'Goose User Center',
          href: 'https://c-ssl.duitang.com/uploads/item/201907/10/20190710112606_xksxn.jpg',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
