import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DirectoryBrowserGrid, DirectoryBrowserGridProps } from '../components/DirectoryBrowserGrid'

export default {
  title: 'Common/DirectoryBrowserGrid',
  component: DirectoryBrowserGrid,
} as Meta

const Template: Story<DirectoryBrowserGridProps> = (args) => <DirectoryBrowserGrid {...args} />

const users = [
  {
    id: '011a88bc-7df9-4d92-ba1f-2ff319e101e1',
    display_name: 'Karin Lamb',
    email: 'karinl@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Karin%20Lamb.jpg',
  },
  {
    id: '01d1e01e-bf53-419a-9762-17270b1a7328',
    display_name: 'Nuno Farinha',
    email: 'nunof@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Nuno%20Farinha.jpg',
  },
  {
    id: '026dc3e3-4406-43c7-9a3e-cba432b0447b',
    display_name: 'Karen Berg',
    email: 'karenb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Karen%20Berg.jpg',
  },
  {
    id: '02abd93d-71f3-4ca7-bba1-929dee6bc5d9',
    display_name: 'Dominik Paiha',
    email: 'dominip@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dominik%20Paiha.jpg',
  },
  {
    id: '043eef25-992d-4761-b948-1ea1977b4160',
    display_name: 'Annelie Zubar',
    email: 'anneliz@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Annelie%20Zubar.jpg',
  },
  {
    id: '05809581-4d1d-4c6b-a895-12e5e129bc04',
    display_name: 'Tina Makovec',
    email: 'tinam@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tina%20Makovec.jpg',
  },
  {
    id: '061929ec-ccb5-407a-ad08-95d26d8cef92',
    display_name: 'John Evans',
    email: 'johnev@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/John%20Evans.jpg',
  },
  {
    id: '06ae3442-d45c-4434-bcbc-8fffc563159c',
    display_name: 'Sunil Uppal',
    email: 'sunilu@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sunil%20Uppal.jpg',
  },
  {
    id: '081d9d81-2445-430c-b1fe-520ecd3ecf00',
    display_name: 'Kate Taneyhill',
    email: 'katet@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kate%20Taneyhill.jpg',
  },
  {
    id: '0855552e-0a9c-49c9-ab7b-b5b2139d68c7',
    display_name: 'Mchiel Wories',
    email: 'mchielw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Mchiel%20Wories.jpg',
  },
  {
    id: '09613928-992c-4328-8024-7e22919ef2b3',
    display_name: 'Anders Madsen',
    email: 'andersm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Anders%20Madsen.jpg',
  },
  {
    id: '09636eb3-0cab-4051-9606-37c549330110',
    display_name: 'Garth Fort',
    email: 'garthf@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Garth%20Fort.jpg',
  },
  {
    id: '0a15a779-2a72-43c3-8002-850ab93db8f0',
    display_name: 'Chris McGurk',
    email: 'chrism@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20McGurk.jpg',
  },
  {
    id: '0a9a7b2d-1dd8-4282-aae1-fae964ec5f6d',
    display_name: 'Ian Tien',
    email: 'iant@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ian%20Tien.jpg',
  },
  {
    id: '0b0be144-c523-49bd-9a1e-ce33380f77d8',
    display_name: 'Nuria Gonzalez',
    email: 'nuriag@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Nuria%20Gonzalez.jpg',
  },
  {
    id: '0b23837b-8fdb-4edf-a50b-325ed0625086',
    display_name: 'Jeff Hay',
    email: 'jeffh@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jeff%20Hay.jpg',
  },
  {
    id: '0b5eb69f-c854-4a3e-92d4-70a9f04bf1ca',
    display_name: 'Jelle Visser',
    email: 'jellev@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jelle%20Visser.jpg',
  },
  {
    id: '0d15bba1-f9e9-48d1-98e2-34d2407e6f86',
    display_name: 'Idan Rubin',
    email: 'idanr@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Idan%20Rubin.jpg',
  },
  {
    id: '0dd27d49-e37a-4d96-974c-60f1e71ea61c',
    display_name: 'Sean Chai',
    email: 'seanc@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sean%20Chai.jpg',
  },
  {
    id: '0f42a43f-7ae4-4e1d-aca2-8ed2f48da070',
    display_name: 'Ayla Kol',
    email: 'aylak@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ayla%20Kol.jpg',
  },
  {
    id: '0f6e0712-63ea-47a3-b209-12b1bda75347',
    display_name: 'Michael Lund',
    email: 'michal1@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michael%20Lund.jpg',
  },
  {
    id: '10e7c1a2-4a94-497d-a738-3c682f8cf761',
    display_name: 'Vernette Price',
    email: 'vernettp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Vernette%20Price.jpg',
  },
  {
    id: '115f290d-6bdc-4de9-b0e4-790c5c440127',
    display_name: 'Ken Ewert',
    email: 'kene@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ken%20Ewert.jpg',
  },
  {
    id: '11afd577-064c-41a9-8a91-6635b8807294',
    display_name: 'Ray Chow',
    email: 'rayc@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ray%20Chow.jpg',
  },
  {
    id: '134976da-0e4a-4b54-8296-88ec813ee99c',
    display_name: 'Rob Barker',
    email: 'robb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Rob%20Barker.jpg',
  },
  {
    id: '1566b672-2488-4b58-ab09-9b62d3a4b9a5',
    display_name: 'Dan Bacon',
    email: 'danb@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dan%20Bacon.jpg',
  },
  {
    id: '1755cd16-eaa9-4d8d-9e0b-d6bb87c40479',
    display_name: 'Denis Dehenne',
    email: 'denisd@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Denis%20Dehenne.jpg',
  },
  {
    id: '17cc34d0-fda3-4061-a35b-989d01b1975e',
    display_name: 'Alisa Lawyer',
    email: 'alisal@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Alisa%20Lawyer.jpg',
  },
  {
    id: '19810018-8a60-4216-8597-80262e5712d0',
    display_name: 'Merav Sror',
    email: 'meravs@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Merav%20Sror.jpg',
  },
  {
    id: '1a0d0c4c-35b4-4956-a10a-d11ffbc519d5',
    display_name: 'Howard Gonzalez',
    email: 'howardg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Howard%20Gonzalez.jpg',
  },
  {
    id: '1e7897e2-c122-47f2-9d7f-534b584776eb',
    display_name: 'Jeremy Los',
    email: 'jeremyl@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jeremy%20Los.jpg',
  },
  {
    id: '1eb018bb-7347-46fd-8d83-35ad5aaa731e',
    display_name: 'Scott Bishop',
    email: 'scottb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Scott%20Bishop.jpg',
  },
  {
    id: '1f666335-b35b-4db6-ad36-a8c93358c611',
    display_name: 'Steve Luper',
    email: 'stevel@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Steve%20Luper.jpg',
  },
  {
    id: '21381b8e-94bb-43df-a37a-6ce89324f411',
    display_name: 'Lina Abola',
    email: 'linaa@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lina%20Abola.jpg',
  },
  {
    id: '22b24470-babd-435b-9349-23c1bcadd849',
    display_name: 'Brad Sutton',
    email: 'brads@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Brad%20Sutton.jpg',
  },
  {
    id: '23072c6f-3814-4be2-b4f1-ea74a3df4e40',
    display_name: 'Barry Johnson',
    email: 'barryj@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Barry%20Johnson.jpg',
  },
  {
    id: '230a05a1-554c-4adb-b4e5-77bb32f2e9bf',
    display_name: 'Kim Ralls',
    email: 'kimr@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kim%20Ralls.jpg',
  },
  {
    id: '23239dc3-116b-4947-8e54-37a574aace9e',
    display_name: 'Scott Rockfield',
    email: 'scottr@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Scott%20Rockfield.jpg',
  },
  {
    id: '242f6e15-e469-4e42-9510-0483f6d019c9',
    display_name: 'Dan Park',
    email: 'danp@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dan%20Park.jpg',
  },
  {
    id: '24f7f219-4e58-4478-ab5b-0c6f3e901831',
    display_name: 'Hans Gufler',
    email: 'hansg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Hans%20Gufler.jpg',
  },
  {
    id: '2727030f-81d6-4816-8bea-ee84608204bc',
    display_name: 'Richard Tupy',
    email: 'richart@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Richard%20Tupy.jpg',
  },
  {
    id: '27f11da9-3adb-4e08-8cf0-b7f8be26f2b9',
    display_name: 'Luca Dellamore',
    email: 'lucad@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Luca%20Dellamore.jpg',
  },
  {
    id: '2859685c-a540-43bf-b161-9ea55e462395',
    display_name: 'John Ganio',
    email: 'johng@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/John%20Ganio.jpg',
  },
  {
    id: '29dcc0c2-e14d-4eb4-8d0c-eeffee01b314',
    display_name: 'Matt Hink',
    email: 'matth@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Matt%20Hink.jpg',
  },
  {
    id: '2a43d793-7367-4a3e-8c6e-5ec955a52038',
    display_name: 'Jack Creasey',
    email: 'jackc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jack%20Creasey.jpg',
  },
  {
    id: '2bfaa552-d9a5-41e9-a6c3-5be62b4433c8',
    display_name: 'April Stewart',
    email: 'aprils@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/April%20Stewart.jpg',
  },
  {
    id: '2cfc0fba-86e9-4107-9a1f-c0e2643cf927',
    display_name: 'Margaret Au',
    email: 'margara@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Margaret%20Au.jpg',
  },
  {
    id: '2cfdb538-a03d-44b1-a0f2-b7ef32b713a7',
    display_name: 'Syed Abbas',
    email: 'syeda@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Syed%20Abbas.jpg',
  },
  {
    id: '2cfec94e-ced9-41c2-bc54-c29f4bd2f3a8',
    display_name: 'Michael Ludwig',
    email: 'michael@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michael%20Ludwig.jpg',
  },
  {
    id: '2d81b25a-4841-48ec-a283-8001181e3f88',
    display_name: 'Erwin Zischka',
    email: 'erwinz@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Erwin%20Zischka.jpg',
  },
  {
    id: '2ff50834-a953-426c-a3f4-397e2c7ad961',
    display_name: 'Alexandre Silva',
    email: 'alexans@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Alexandre%20Silva.jpg',
  },
  {
    id: '309409a4-150e-44e3-93c5-f08458b243ee',
    display_name: 'Lene Aalling',
    email: 'lenea@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lene%20Aalling.jpg',
  },
  {
    id: '314ee328-bd7f-442e-b1d9-44b29f93f96a',
    display_name: 'Ned Friend',
    email: 'nedf@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ned%20Friend.jpg',
  },
  {
    id: '3193eddf-826d-40cb-97e5-29d899f0be96',
    display_name: 'Trey Pratt',
    email: 'treyp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Trey%20Pratt.jpg',
  },
  {
    id: '330d3d4c-179a-4c71-9b45-7a94d702b535',
    display_name: 'Kirk Nason',
    email: 'kirkj@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kirk%20Nason.jpg',
  },
  {
    id: '334959d2-aa9c-4a16-9de6-a81831dc5fa6',
    display_name: 'Parna Khot',
    email: 'parnak@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Parna%20Khot.jpg',
  },
  {
    id: '33d6a6a2-3615-4f0c-aa26-c15016432a24',
    display_name: 'Carol Troup',
    email: 'carolt@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Carol%20Troup.jpg',
  },
  {
    id: '36ea36ef-6c7a-4a1f-b146-2f006196f4dd',
    display_name: 'Hazem Abolrous',
    email: 'hazema@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Hazem%20Abolrous.jpg',
  },
  {
    id: '37b056d8-f63e-412b-b172-63d60d35ea56',
    display_name: 'Eduard Dell',
    email: 'eduardd@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Eduard%20Dell.jpg',
  },
  {
    id: '3b399135-31d6-463b-b91b-368e5b1449d5',
    display_name: 'Toni Poe',
    email: 'tonip@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Toni%20Poe.jpg',
  },
  {
    id: '3d1f6403-e0eb-4324-9640-df6c4f4b3c7b',
    display_name: 'Tai Lee',
    email: 'tail@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tai%20Lee.jpg',
  },
  {
    id: '3d2f2dfa-243a-402e-870d-60dd49941a28',
    display_name: 'Cassie Hicks',
    email: 'cassieh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Cassie%20Hicks.jpg',
  },
  {
    id: '40ca4888-5bf2-46d7-a822-e727c49aa184',
    display_name: 'Phyllis Harris',
    email: 'phyllih@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Phyllis%20Harris.jpg',
  },
  {
    id: '41e635b7-adc4-4bd4-bfcc-21dfdb116222',
    display_name: 'Jaka Stele',
    email: 'jakas@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jaka%20Stele.jpg',
  },
  {
    id: '41e97533-89f7-45d7-8246-eaa449b5651d',
    display_name: 'Chris Johnson [FINANCE]',
    email: 'chrisjoh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20Johnson%20%5BFINANCE%5D.jpg',
  },
  {
    id: '45a85a2d-37c8-47e6-9a5a-6f6bc2c7421e',
    display_name: 'Peder Thode',
    email: 'pedert@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Peder%20Thode.jpg',
  },
  {
    id: '4641face-6a59-4055-bc0b-29db4b3b1672',
    display_name: 'James Wittrell',
    email: 'jamesw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/James%20Wittrell.jpg',
  },
  {
    id: '46724360-4b6e-43c9-bb13-b57c7cbd2a12',
    display_name: 'Ye Xu',
    email: 'yex@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ye%20Xu.jpg',
  },
  {
    id: '49576048-c1ae-4c61-b876-2608434f81ed',
    display_name: 'Brian Groth',
    email: 'briang@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Brian%20Groth.jpg',
  },
  {
    id: '496e3974-291c-4a49-add5-3b9a2da18ec6',
    display_name: 'Jon Grande',
    email: 'jong@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jon%20Grande.jpg',
  },
  {
    id: '49b7abb0-7c7e-4052-907c-16f5825683eb',
    display_name: 'Jim Lucey',
    email: 'jiml@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jim%20Lucey.jpg',
  },
  {
    id: '49c4721e-48b4-48b2-997f-633fb4afb540',
    display_name: 'Jim Corbin',
    email: 'jimc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jim%20Corbin.jpg',
  },
  {
    id: '49ee2aac-d40f-46a2-8520-0218b5e42a49',
    display_name: 'Jesus Escolar',
    email: 'jesuse@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jesus%20Escolar.jpg',
  },
  {
    id: '4a783fb5-dabc-4f4f-8a2f-b1c90b8efe16',
    display_name: 'Jan Kotas',
    email: 'jank@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jan%20Kotas.jpg',
  },
  {
    id: '4b17322a-7f61-4d6a-8ec2-e38d5024af99',
    display_name: 'Dave Natsuhara',
    email: 'daven@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dave%20Natsuhara.jpg',
  },
  {
    id: '4b6ea132-e8fa-4d67-b0e9-c194d201309d',
    display_name: 'Anne Weiler',
    email: 'annew@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Anne%20Weiler.jpg',
  },
  {
    id: '4bbaa4f6-bf32-4895-a632-147b0450d68a',
    display_name: 'Valery Ushakov',
    email: 'valeryu@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Valery%20Ushakov.jpg',
  },
  {
    id: '4c46b704-4290-4fc4-bf7f-3e36e1afc0dc',
    display_name: 'Sean Purcell',
    email: 'seanp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sean%20Purcell.jpg',
  },
  {
    id: '4d339518-1c4e-46dd-8024-829f555b1562',
    display_name: 'David Simpson',
    email: 'davids@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Simpson.jpg',
  },
  {
    id: '4edd87db-2894-4448-be3a-6982b0baf17d',
    display_name: 'Stephen Deming',
    email: 'stephed@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Stephen%20Deming.jpg',
  },
  {
    id: '4f22439d-d769-46ec-a4cb-6fd4a05fbf23',
    display_name: 'Michael Sullivan',
    email: 'michaes@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michael%20Sullivan.jpg',
  },
  {
    id: '501b0760-1220-41d9-8dd0-f6be960717f8',
    display_name: 'Magnus Hedlund',
    email: 'magnush@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Magnus%20Hedlund.jpg',
  },
  {
    id: '50711537-215b-474b-aba0-1e13a1f398ea',
    display_name: 'Josh Edwards',
    email: 'joshe@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Josh%20Edwards.jpg',
  },
  {
    id: '509cd11b-74bf-4d4d-a19c-1f740e7e4db7',
    display_name: 'Lorraine Nay',
    email: 'lorrain@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lorraine%20Nay.jpg',
  },
  {
    id: '50c573a3-0619-4e1b-b433-401a333c7372',
    display_name: 'Kelly Weadock',
    email: 'kellyw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kelly%20Weadock.jpg',
  },
  {
    id: '51ae8f34-698e-4651-a429-2cb825cbe449',
    display_name: 'Bernard Tham',
    email: 'bernart@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Bernard%20Tham.jpg',
  },
  {
    id: '52d68cec-3ea1-4efa-9502-a9f7855da055',
    display_name: 'Simon Rapier',
    email: 'simonr@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Simon%20Rapier.jpg',
  },
  {
    id: '530fc08d-2ab3-499c-8ba8-f4ad7af64b5d',
    display_name: 'Michael Zeman',
    email: 'michaez@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michael%20Zeman.jpg',
  },
  {
    id: '54166cfd-94e0-4fa8-8794-3ade7fb3fb95',
    display_name: 'Alicia Thomber',
    email: 'aliciat@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Alicia%20Thomber.jpg',
  },
  {
    id: '559cc2f4-1762-40a0-9d58-cd724781215c',
    display_name: "Robert O'Hara",
    email: 'roberto@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Robert%20O%27Hara.jpg',
  },
  {
    id: '561988f3-f047-4346-b081-09051fe8e12d',
    display_name: 'Gina Boyer',
    email: 'ginab@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Gina%20Boyer.jpg',
  },
  {
    id: '5914122f-d433-4094-9a83-7fcbdcecaec6',
    display_name: 'Allan Guinot',
    email: 'allang@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Allan%20Guinot.jpg',
  },
  {
    id: '5a9e505a-a18f-4bf7-954e-255cd1ceafec',
    display_name: 'Jill Frank',
    email: 'jillf@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jill%20Frank.jpg',
  },
  {
    id: '5b25c30e-2a5e-40ac-8ee6-03c009d420da',
    display_name: 'Sanjay Shah',
    email: 'sanjays@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sanjay%20Shah.jpg',
  },
  {
    id: '5b517785-ce63-4d9e-9564-75f60db5baa4',
    display_name: 'Lisa Andrews',
    email: 'lisaa@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lisa%20Andrews.jpg',
  },
  {
    id: '5b97edec-c8a4-44cb-93a9-2994c538296f',
    display_name: 'Ron Gabel',
    email: 'rong@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ron%20Gabel.jpg',
  },
  {
    id: '5bddae12-c93b-400e-95ea-7fdd978644f2',
    display_name: 'Danni Ortman',
    email: 'dannio@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Danni%20Ortman.jpg',
  },
  {
    id: '5d8b4d1b-baa0-4805-9f0d-e2b68d462b4e',
    display_name: 'Jordao Moreno',
    email: 'jordaom@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jordao%20Moreno.jpg',
  },
  {
    id: '5e5d6b8f-1344-4e70-a962-b952caeed4c1',
    display_name: 'Jason Carlson',
    email: 'jasonc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jason%20Carlson.jpg',
  },
  {
    id: '5e9619e6-7db9-49b1-b02d-74e7f13e9804',
    display_name: 'Heinrich Fischer',
    email: 'heinrif@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Heinrich%20Fischer.jpg',
  },
  {
    id: '5f29b1e3-d951-4f9d-923d-30bcd2395b77',
    display_name: 'Sunil Koduri',
    email: 'sunilk@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sunil%20Koduri.jpg',
  },
  {
    id: '5f35988c-afb1-4107-9b1a-935f91f3bf71',
    display_name: 'Larry Zhang',
    email: 'larryz@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Larry%20Zhang.jpg',
  },
  {
    id: '5f880cde-c4f9-4480-82ea-0362b5397b0f',
    display_name: 'Rob Young',
    email: 'roby@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Rob%20Young.jpg',
  },
  {
    id: '5ff9eed7-6b0d-4b20-bed5-b0b904191880',
    display_name: 'Alan Steiner',
    email: 'alans@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Alan%20Steiner.jpg',
  },
  {
    id: '601b5da0-1569-4b7b-8678-af4fe73a07c4',
    display_name: 'Michael Ovesen',
    email: 'michaeo@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michael%20Ovesen.jpg',
  },
  {
    id: '60f87580-1572-419c-88ee-2e8424732e0e',
    display_name: 'Chase Carpenter',
    email: 'chasec@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chase%20Carpenter.jpg',
  },
  {
    id: '61239bbd-fdeb-422b-8efe-40edc8dffaaf',
    display_name: 'Roland Wacker',
    email: 'rolandw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Roland%20Wacker.jpg',
  },
  {
    id: '6336e033-261a-4b4c-b800-3f407008ec7e',
    display_name: 'Ken Malcolmson',
    email: 'kenm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ken%20Malcolmson.jpg',
  },
  {
    id: '6337b7f5-b5ad-4931-b33a-9df49f032922',
    display_name: 'Lisa Miller',
    email: 'lisam@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lisa%20Miller.jpg',
  },
  {
    id: '664725d3-879e-4447-98da-45a39a55acde',
    display_name: 'Kim Abercrombie',
    email: 'kima@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kim%20Abercrombie.jpg',
  },
  {
    id: '67299c87-9e80-4ee5-97f6-7efaafbe5bb1',
    display_name: 'Erik Gubbels',
    email: 'erikg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Erik%20Gubbels.jpg',
  },
  {
    id: '67b42b6c-6bd8-40e2-a622-fe69eacd3d47',
    display_name: 'Chris Johnson [SALES]',
    email: 'chrisjohns@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20Johnson%20%5BSALES%5D.jpg',
  },
  {
    id: '6884a642-9966-442a-ac80-6dfed9442a5b',
    display_name: 'Jenni Merrifield',
    email: 'jennim@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jenni%20Merrifield.jpg',
  },
  {
    id: '6938e863-6bcd-4c01-a4c9-9731a62ea24e',
    display_name: 'Luis Bonifaz',
    email: 'luisb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Luis%20Bonifaz.jpg',
  },
  {
    id: '6a11df26-6b53-4baf-b3c8-25add379d21f',
    display_name: 'Arthur Yasinski',
    email: 'arthury@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Arthur%20Yasinski.jpg',
  },
  {
    id: '6b1b2f88-0f3c-429f-8ad7-1535a1dabb3e',
    display_name: 'Erik Andersen',
    email: 'erica@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Erik%20Andersen.jpg',
  },
  {
    id: '6b3088e0-bb66-4e34-b1a1-26ccf714a0a2',
    display_name: 'Felipe Martins',
    email: 'felipem@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Felipe%20Martins.jpg',
  },
  {
    id: '6b4a2b4e-0b8d-456d-be2e-d3ddcdc51fb3',
    display_name: 'Tony Madigan',
    email: 'tonym@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tony%20Madigan.jpg',
  },
  {
    id: '6cfde6df-e2d3-4958-8697-ef78729cbe51',
    display_name: 'Gareth Chan',
    email: 'garethc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Gareth%20Chan.jpg',
  },
  {
    id: '6f06f83c-683b-471c-8113-4b4d5119787b',
    display_name: 'Arlene Huff',
    email: 'arleneh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Arlene%20Huff.jpg',
  },
  {
    id: '7139b430-f5e4-4dc2-8b1f-1921b54f42a5',
    display_name: 'Kelly Krout',
    email: 'kellyk@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kelly%20Krout.jpg',
  },
  {
    id: '72bd066c-d0ac-4e94-af41-11bd70dd7d40',
    display_name: 'Spencer Low',
    email: 'spencel@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Spencer%20Low.jpg',
  },
  {
    id: '72d2b1b2-1f94-4d3a-be01-c327e35c72b6',
    display_name: 'Chris Norred',
    email: 'chrisn@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20Norred.jpg',
  },
  {
    id: '732b9335-bd32-4ab2-9391-cdf3b8337250',
    display_name: 'Scott Gode',
    email: 'scottg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Scott%20Gode.jpg',
  },
  {
    id: '735489b4-7b2c-4f68-a76e-9156de8da5d6',
    display_name: 'Jim Daly',
    email: 'jimd@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jim%20Daly.jpg',
  },
  {
    id: '7491b038-f6dc-42c9-a856-928af8de77d6',
    display_name: 'Mike Tiano',
    email: 'miket@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Mike%20Tiano.jpg',
  },
  {
    id: '74de80f2-9eab-4c4c-8df5-af0dc32f16ca',
    display_name: 'Ari Suominen',
    email: 'aris@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ari%20Suominen.jpg',
  },
  {
    id: '74e3e1ec-3ff1-4727-8a2c-8e795c246502',
    display_name: 'Fabrice Canel',
    email: 'fabricc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Fabrice%20Canel.jpg',
  },
  {
    id: '77f897be-83f6-4ad6-aec6-0b051223bb82',
    display_name: 'Chris Barry',
    email: 'chrisb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20Barry.jpg',
  },
  {
    id: '7846c22f-d3d8-4e02-8b62-d055d0284783',
    display_name: 'Adam Barr',
    email: 'adamb@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Adam%20Barr.jpg',
  },
  {
    id: '7c2df1cf-6aef-4b5a-8666-e8fbe1f97663',
    display_name: 'Peter Saddow',
    email: 'peters@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Peter%20Saddow.jpg',
  },
  {
    id: '7cee8e85-e3cf-4b6f-84ec-fac89107e957',
    display_name: 'Marie Dubois',
    email: 'maried@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Marie%20Dubois.jpg',
  },
  {
    id: '7db937b4-a31a-448f-bc54-7b871e609506',
    display_name: 'Karim Manar',
    email: 'karimm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Karim%20Manar.jpg',
  },
  {
    id: '7e28daa4-228f-46fc-b8f1-f35d7e4ed03e',
    display_name: 'Jose Saraiva',
    email: 'joses@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jose%20Saraiva.jpg',
  },
  {
    id: '7e60ff5a-c38b-4815-8f00-61b269a8f083',
    display_name: 'Chen Yang',
    email: 'cheny@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chen%20Yang.jpg',
  },
  {
    id: '7eb81280-e285-4a1a-a1df-bd332fa9ec25',
    display_name: 'Don Funk',
    email: 'donf@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Don%20Funk.jpg',
  },
  {
    id: '8006fa53-332a-4169-85b3-4ad056f4cc12',
    display_name: 'Lars Hansson',
    email: 'larsh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lars%20Hansson.jpg',
  },
  {
    id: '805a6755-468a-4064-a72a-2e7b50611f8e',
    display_name: 'Manish Chopra',
    email: 'manishc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Manish%20Chopra.jpg',
  },
  {
    id: '81066423-effe-4a10-aa35-4aa10ae0510c',
    display_name: 'Julian Isla',
    email: 'juliani@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Julian%20Isla.jpg',
  },
  {
    id: '825e514b-d061-40e4-af79-1d3d432447ad',
    display_name: 'Kari Furse',
    email: 'karif@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kari%20Furse.jpg',
  },
  {
    id: '82919424-4615-4a6c-8922-0719b4e8c3a7',
    display_name: 'John Kane',
    email: 'johnk@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/John%20Kane.jpg',
  },
  {
    id: '82af565f-9620-4754-a2d8-cb4baa18c1d0',
    display_name: 'Michael Mainer',
    email: 'michaem@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michael%20Mainer.jpg',
  },
  {
    id: '8550e839-78e9-4c42-85b7-1bfdf8aa8ed6',
    display_name: 'Blaine Dockter',
    email: 'blained@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Blaine%20Dockter.jpg',
  },
  {
    id: '85c26295-3d53-4693-b74a-0a892268728c',
    display_name: 'Steve Masters',
    email: 'stevem@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Steve%20Masters.jpg',
  },
  {
    id: '8724dd1b-c401-4487-9ea8-4c224ef67710',
    display_name: 'Frank Martinez',
    email: 'frankm1@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Frank%20Martinez.jpg',
  },
  {
    id: '87453529-86f3-419d-99e5-2ab07db70c47',
    display_name: 'Greg Winston',
    email: 'gregw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Greg%20Winston.jpg',
  },
  {
    id: '87baf3ad-a775-4d5c-8a10-4c0d5fb0619c',
    display_name: 'Shmuel Yair',
    email: 'shmuely@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Shmuel%20Yair.jpg',
  },
  {
    id: '87d72a92-cf0c-40f5-b5a2-075d0fc9da0b',
    display_name: 'Mary Cha',
    email: 'maryc@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Mary%20Cha.jpg',
  },
  {
    id: '8857777c-5356-480d-bde8-7c23032db281',
    display_name: 'Brian Cox',
    email: 'brianc@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Brian%20Cox.jpg',
  },
  {
    id: '88854ebf-d74b-4648-ae25-6a79e2e762c7',
    display_name: 'Jessica Arnold',
    email: 'jessica@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jessica%20Arnold.jpg',
  },
  {
    id: '8a883c57-24f4-4bb9-8244-fc03f8cd24f6',
    display_name: 'Eran Harel',
    email: 'eranh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Eran%20Harel.jpg',
  },
  {
    id: '8ad45b6d-8c85-496a-a2d9-78422c4ee663',
    display_name: 'Cesar Garcia',
    email: 'cesarg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Cesar%20Garcia.jpg',
  },
  {
    id: '8b066919-9f6c-4e45-8afe-7be6ab97853c',
    display_name: 'David Zazzo',
    email: 'davidz@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Zazzo.jpg',
  },
  {
    id: '8b66e377-10a0-4346-9f98-4098cfcbffa7',
    display_name: 'Terry Earls',
    email: 'terrye@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Terry%20Earls.jpg',
  },
  {
    id: '8e18794b-7b4d-4375-b3cd-bcf6199926da',
    display_name: 'Cliff Diddier',
    email: 'cliffd@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Cliff%20Diddier.jpg',
  },
  {
    id: '8f2ba7bb-e55c-4f06-b8fc-c2f1595b684f',
    display_name: 'Dough Mahugh',
    email: 'doughm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dough%20Mahugh.jpg',
  },
  {
    id: '8f732dea-9040-4cc3-bb9f-5a49657d3be5',
    display_name: 'Neil Orint',
    email: 'neilo@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Neil%20Orint.jpg',
  },
  {
    id: '90291c8d-f900-4762-96ad-c2eb1002686d',
    display_name: 'John Yokum',
    email: 'johny@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/John%20Yokum.jpg',
  },
  {
    id: '907dbfd3-298a-4388-8dd9-707760dd3092',
    display_name: 'Aaron Painter',
    email: 'aaronp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Aaron%20Painter.jpg',
  },
  {
    id: '9149465d-e566-4c1a-801d-8d01c3c00dea',
    display_name: 'Toby Nixon',
    email: 'tobyn@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Toby%20Nixon.jpg',
  },
  {
    id: '936a0c68-bb88-44fd-8139-4eb75ec77f73',
    display_name: 'Steven Wright',
    email: 'stevenw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Steven%20Wright.jpg',
  },
  {
    id: '94275b5c-ed29-4f08-b12c-0c0e48f4103f',
    display_name: 'Maru Subrmani',
    email: 'marus@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Maru%20Subrmani.jpg',
  },
  {
    id: '94594a6a-d619-403b-a2c4-df1a6dd243af',
    display_name: 'Jun Cao',
    email: 'junc@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jun%20Cao.jpg',
  },
  {
    id: '9476eed7-4e97-4378-b0be-0d8ca07906fd',
    display_name: 'Alan Brewer',
    email: 'alanb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Alan%20Brewer.jpg',
  },
  {
    id: '94b0053a-e3d2-4bcd-974d-bf16903480b5',
    display_name: 'David Bradley',
    email: 'davidb1@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Bradley.jpg',
  },
  {
    id: '96d25c15-e37f-455c-b75f-69e5da969cc0',
    display_name: 'Christian Rytt',
    email: 'christr@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Christian%20Rytt.jpg',
  },
  {
    id: '980f27ce-66f2-4fb4-8639-12849a484e92',
    display_name: 'Cari Drummelle',
    email: 'carid@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Cari%20Drummelle.jpg',
  },
  {
    id: '98610f21-6f4a-4c66-8b52-006eb7c51ba2',
    display_name: 'Qiong Wu',
    email: 'qiongw@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Qiong%20Wu.jpg',
  },
  {
    id: '99612e2d-ea29-44ed-bc7e-bd17d5fd84a7',
    display_name: 'Christa Geller',
    email: 'christg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Christa%20Geller.jpg',
  },
  {
    id: '999dfb79-ae8a-46b5-96dd-9a4a665f1c83',
    display_name: 'Ted Bremer',
    email: 'tedb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ted%20Bremer.jpg',
  },
  {
    id: '99fc0f94-9573-477f-8e02-ca842e069b8c',
    display_name: 'Diane Prescott',
    email: 'dianep@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Diane%20Prescott.jpg',
  },
  {
    id: '9a7c972f-cff2-47b0-9508-0a60ae0bd846',
    display_name: 'Jesper Aaberg',
    email: 'jespera@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jesper%20Aaberg.jpg',
  },
  {
    id: '9aca78b2-fd43-4c54-a946-68bc3cabdce6',
    display_name: 'Paul Duffy',
    email: 'pauld@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Paul%20Duffy.jpg',
  },
  {
    id: '9b7d63c5-c77c-415c-b37c-c27e1c22112e',
    display_name: 'Dan Hough',
    email: 'danh@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dan%20Hough.jpg',
  },
  {
    id: '9c2872a2-9f00-42c0-b00d-4842a0fcaef3',
    display_name: 'Jamie Reding',
    email: 'jamier@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jamie%20Reding.jpg',
  },
  {
    id: '9dcc4bd9-6fe3-4228-b3c0-32ee0aa83d59',
    display_name: 'Lubor Kollar',
    email: 'lubork@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lubor%20Kollar.jpg',
  },
  {
    id: '9f42a891-9741-4c8c-88e1-1939c93893dc',
    display_name: 'Olivier Fontana',
    email: 'olivief@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Olivier%20Fontana.jpg',
  },
  {
    id: 'a0c37074-eea7-4cf6-8fae-9d94353b9beb',
    display_name: 'Maurice Taylor',
    email: 'maurict@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Maurice%20Taylor.jpg',
  },
  {
    id: 'a0e7e4af-217c-4c54-878e-b5236e5c96df',
    display_name: 'Chris Gray',
    email: 'chrisg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20Gray.jpg',
  },
  {
    id: 'a204f649-8442-4f66-b157-36a962d9ed99',
    display_name: 'Sven Buck',
    email: 'svenb@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sven%20Buck.jpg',
  },
  {
    id: 'a2455199-3552-440d-b834-2f92701b5713',
    display_name: 'Tony Wang',
    email: 'tonyw@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tony%20Wang.jpg',
  },
  {
    id: 'a28e6030-6acc-4ca3-b715-88685ff511d5',
    display_name: 'Jenny Lysaker',
    email: 'jennyl@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jenny%20Lysaker.jpg',
  },
  {
    id: 'a29140f9-13c6-4849-9890-0687072dece8',
    display_name: 'Erika Cheley',
    email: 'erikac@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Erika%20Cheley.jpg',
  },
  {
    id: 'a37a24a1-f54a-4e97-933f-b7aaf00d96af',
    display_name: 'David Bossard',
    email: 'davidb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Bossard.jpg',
  },
  {
    id: 'a528dc1d-0042-484d-81cb-dc58c95d8147',
    display_name: 'Arturo Lopez',
    email: 'arturol@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Arturo%20Lopez.jpg',
  },
  {
    id: 'a5a4f9bf-2e00-4739-bfaa-e115b6a7dd97',
    display_name: 'Marcelo Truffat',
    email: 'marcelt@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Marcelo%20Truffat.jpg',
  },
  {
    id: 'a69a1b96-822b-4c67-b9f1-a4f52bb27aba',
    display_name: 'Luka Abrus',
    email: 'lukaa@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Luka%20Abrus.jpg',
  },
  {
    id: 'a6a98baa-cacc-409f-beb4-22c3a807a473',
    display_name: 'Corinna Bolender',
    email: 'corinnb@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Corinna%20Bolender.jpg',
  },
  {
    id: 'a6f257e6-b2a2-404b-8327-179f0279f3ac',
    display_name: 'Lukas Keller',
    email: 'lukask@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lukas%20Keller.jpg',
  },
  {
    id: 'a7123b9f-1060-4213-b5bb-f971303cf182',
    display_name: 'Robin Young',
    email: 'robiny@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Robin%20Young.jpg',
  },
  {
    id: 'abe8e04a-d2cf-4513-b6f3-bd4b3f83d0ae',
    display_name: 'Kevin Kennedy',
    email: 'kevink@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kevin%20Kennedy.jpg',
  },
  {
    id: 'acacc661-f71d-490a-9cb8-0b7bdfe7c669',
    display_name: 'Mike Nash',
    email: 'miken@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Mike%20Nash.jpg',
  },
  {
    id: 'acb51c31-6b51-4d80-bdb5-f55f982cdaf6',
    display_name: 'Joel Lachance',
    email: 'joell@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Joel%20Lachance.jpg',
  },
  {
    id: 'ad8b0c28-0128-4688-a396-19723b1a77b1',
    display_name: 'Tina Lassila',
    email: 'tinal@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tina%20Lassila.jpg',
  },
  {
    id: 'ade56bf7-667e-465f-bd7a-8402ed4f949a',
    display_name: 'Simon Pearson',
    email: 'simonp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Simon%20Pearson.jpg',
  },
  {
    id: 'b1bb9fc3-dcb0-4328-8d91-6d88ee78bc2d',
    display_name: 'Keith Dishmo',
    email: 'keithd@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Keith%20Dishmo.jpg',
  },
  {
    id: 'b330d274-7fcd-450d-af45-1eaceca06a4c',
    display_name: 'David So',
    email: 'davids1@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20So.jpg',
  },
  {
    id: 'b3da460c-6191-4725-b08d-52bba48a574f',
    display_name: 'Chris F. Johnson',
    email: 'chrisjohn@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20F.%20Johnson.jpg',
  },
  {
    id: 'b3f2cfc1-1e7f-45e3-b54c-1ea8d259f68d',
    display_name: 'Michiko Osada',
    email: 'michiko@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michiko%20Osada.jpg',
  },
  {
    id: 'b43c196e-de75-4752-8a5c-c0a13f9ccb92',
    display_name: 'Nate Sun',
    email: 'nates@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Nate%20Sun.jpg',
  },
  {
    id: 'b5dfbef4-8ca8-49f5-a2de-4af33b175552',
    display_name: 'Esther Valle',
    email: 'estherv@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Esther%20Valle.jpg',
  },
  {
    id: 'b6c3f269-7c18-4c71-96d9-fa6422cca9dd',
    display_name: 'Michelle Fredette',
    email: 'michelf@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Michelle%20Fredette.jpg',
  },
  {
    id: 'b739469e-df71-454e-ac05-3fc3e8baeeaf',
    display_name: 'Jeff Williams',
    email: 'jeffw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jeff%20Williams.jpg',
  },
  {
    id: 'b7de08a6-8417-491b-be62-85945a538f46',
    display_name: 'Dan Jump',
    email: 'danj@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Dan%20Jump.jpg',
  },
  {
    id: 'b814383c-7677-4688-9657-b7da87029527',
    display_name: 'Ty Carlson',
    email: 'tyc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ty%20Carlson.jpg',
  },
  {
    id: 'b886a5ce-2ea5-4158-9c3d-3d6f0cf7ef40',
    display_name: 'Todd Rowe',
    email: 'toddr@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Todd%20Rowe.jpg',
  },
  {
    id: 'b9a0bf66-8825-4609-9358-a43f9ab0404d',
    display_name: 'Eric Gruber',
    email: 'ericg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Eric%20Gruber.jpg',
  },
  {
    id: 'bb00ed50-bc69-4871-bdbf-fadf5be62dd0',
    display_name: 'Terrence Phillip',
    email: 'terrenp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Terrence%20Phillip.jpg',
  },
  {
    id: 'bc0cc68b-a9a2-4196-9ec9-e788801c4ab7',
    display_name: 'Hugo Garcia',
    email: 'hugog@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Hugo%20Garcia.jpg',
  },
  {
    id: 'bc1a8902-3723-4595-82c5-abef33280605',
    display_name: 'Kenneth Cools',
    email: 'kennetc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kenneth%20Cools.jpg',
  },
  {
    id: 'be7519a0-a110-4627-914f-03038b7bc4d1',
    display_name: 'Jon Jaffe',
    email: 'jonj@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jon%20Jaffe.jpg',
  },
  {
    id: 'bec96a2e-6811-4aed-92c1-80c10cbef492',
    display_name: 'Kerim Hanif',
    email: 'kerimh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kerim%20Hanif.jpg',
  },
  {
    id: 'bfb3de68-ea0c-4087-a0c8-176f83b674e3',
    display_name: 'Christine Koch',
    email: 'christk@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Christine%20Koch.jpg',
  },
  {
    id: 'c021f93c-6083-4fe8-8354-01406e5dc9a2',
    display_name: 'Patricia Doyle',
    email: 'patricd@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Patricia%20Doyle.jpg',
  },
  {
    id: 'c12c238f-5f1a-4e26-8786-536be9589214',
    display_name: 'John John',
    email: 'johne@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/John%20John.jpg',
  },
  {
    id: 'c38e3f7b-c5b1-4ba0-b7b8-4bcf317e7db8',
    display_name: 'Manueal Machado',
    email: 'manueam@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Manueal%20Machado.jpg',
  },
  {
    id: 'c6083bbc-d33d-4ee6-b1d2-623893b47535',
    display_name: 'Mark Hanson',
    email: 'markh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Mark%20Hanson.jpg',
  },
  {
    id: 'c6279aa8-6854-42af-bdee-da4f7cd7696d',
    display_name: 'Scott MacDonald',
    email: 'scottm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Scott%20MacDonald.jpg',
  },
  {
    id: 'c664caf1-1023-4a0d-a90d-ec891eb89e61',
    display_name: 'Vladimir Egorov',
    email: 'vladime@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Vladimir%20Egorov.jpg',
  },
  {
    id: 'c70fcbcf-e7bc-4e23-bd15-139963b85547',
    display_name: 'Mike Ray',
    email: 'miker@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Mike%20Ray.jpg',
  },
  {
    id: 'c9b92bc2-af45-453d-a6cf-00ce57cbdc3d',
    display_name: 'Ben Spain',
    email: 'bens@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ben%20Spain.jpg',
  },
  {
    id: 'ca7c1c08-3cac-4b77-bb44-4a7cccd7b72c',
    display_name: 'Guido Pica',
    email: 'guidop@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Guido%20Pica.jpg',
  },
  {
    id: 'cc0fab94-80c4-40c6-bad2-e9cf5eef6f2b',
    display_name: 'William Vong',
    email: 'williav@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/William%20Vong.jpg',
  },
  {
    id: 'cedb0e6a-9974-4293-8286-7dc8f5985e8a',
    display_name: 'Reina Cabatana',
    email: 'reinac@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Reina%20Cabatana.jpg',
  },
  {
    id: 'cf154fe7-9cdf-41f6-b875-437e5017faac',
    display_name: 'Christian Jene',
    email: 'christj@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Christian%20Jene.jpg',
  },
  {
    id: 'cff32e30-7047-4c64-a1d6-04d478287546',
    display_name: 'Humberto Acevedo',
    email: 'humbera@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Humberto%20Acevedo.jpg',
  },
  {
    id: 'd0195cfd-7e9a-4ee8-b838-ec43edba4c68',
    display_name: 'Sameer Tejani',
    email: 'sameert@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sameer%20Tejani.jpg',
  },
  {
    id: 'd20f9cd0-3cc4-4f13-8b11-8305abe0bb2b',
    display_name: 'Renee Lo',
    email: 'reneel@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Renee%20Lo.jpg',
  },
  {
    id: 'd24e5009-dcf1-4d20-9aa3-874a83283cf0',
    display_name: 'Amy Alberts',
    email: 'amya@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Amy%20Alberts.jpg',
  },
  {
    id: 'd2c272c5-1aff-46a0-a364-c101e2e22678',
    display_name: 'David Wright',
    email: 'davidw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Wright.jpg',
  },
  {
    id: 'd37da227-e452-489e-bf60-b8d87a4c32c0',
    display_name: 'David Hamilton',
    email: 'davidh@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Hamilton.jpg',
  },
  {
    id: 'd614cab3-cbef-4f76-ac89-6272c4296a5b',
    display_name: 'Andy Jacobs',
    email: 'andyj@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Andy%20Jacobs.jpg',
  },
  {
    id: 'd64b8476-3c5f-4caf-af6f-9a0f1c51d19f',
    display_name: 'Kris Johnsen',
    email: 'krisj@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kris%20Johnsen.jpg',
  },
  {
    id: 'd70e0bad-9aca-44c7-94cb-12bc7ca5f222',
    display_name: 'Anna Lidman',
    email: 'annal@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Anna%20Lidman.jpg',
  },
  {
    id: 'd7777583-6b90-40eb-91a8-6f2bf2791f4e',
    display_name: 'Andrew Ma',
    email: 'andrewm@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Andrew%20Ma.jpg',
  },
  {
    id: 'd7fc5e1b-279d-4263-8e46-50ddf3031fea',
    display_name: 'Carlos Grilo',
    email: 'carlosg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Carlos%20Grilo.jpg',
  },
  {
    id: 'd856c97a-a02f-4b78-b966-1ea9cb9f28e7',
    display_name: 'Ellen Adams',
    email: 'ellena@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ellen%20Adams.jpg',
  },
  {
    id: 'd8fd85c5-5df6-4d42-804e-14c618b3bbba',
    display_name: 'Marc Faerber',
    email: 'marcf@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Marc%20Faerber.jpg',
  },
  {
    id: 'd97650ab-db13-4f64-9126-f88670e1c084',
    display_name: 'Alfons Parovszky',
    email: 'alfonsp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Alfons%20Parovszky.jpg',
  },
  {
    id: 'daf00fa4-53f0-4732-a404-1e7a164f77a1',
    display_name: 'Elizabeth Andersen',
    email: 'elizaba@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Elizabeth%20Andersen.jpg',
  },
  {
    id: 'db494dc0-7737-43e8-8c15-5d004cad6e15',
    display_name: 'Kai Axford',
    email: 'kaia@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kai%20Axford.jpg',
  },
  {
    id: 'dbba0074-e5fc-49ec-bc34-74a6329be754',
    display_name: 'Tom Youtsey',
    email: 'tomy@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tom%20Youtsey.jpg',
  },
  {
    id: 'dbf9f74b-86a4-4341-aaca-49c7ccbe7485',
    display_name: 'Tad Orman',
    email: 'tado@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tad%20Orman.jpg',
  },
  {
    id: 'dcc10729-8dbe-426d-b6ac-0a95e9a2f0d7',
    display_name: 'Don Hall',
    email: 'donh@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Don%20Hall.jpg',
  },
  {
    id: 'dd5cb399-40ae-4fd5-853f-bcf495052b81',
    display_name: 'Thomas Hamborg',
    email: 'thomash@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Thomas%20Hamborg.jpg',
  },
  {
    id: 'dda65c86-f801-448a-b447-823aee708d4e',
    display_name: 'Allison Brown',
    email: 'allisob@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Allison%20Brown.jpg',
  },
  {
    id: 'dda79200-5c91-4359-a871-19943799fa5b',
    display_name: 'Justin Thorp',
    email: 'justint@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Justin%20Thorp.jpg',
  },
  {
    id: 'dece205a-6795-433d-99a3-2ba2f993cfff',
    display_name: 'Frank Miller',
    email: 'frankm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Frank%20Miller.jpg',
  },
  {
    id: 'df5f44c7-dcbc-4b3d-b8d1-a96021f4e660',
    display_name: 'Pavel Simsa',
    email: 'pavels@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Pavel%20Simsa.jpg',
  },
  {
    id: 'dfdadc39-7335-404d-af66-c77cf13a15f8',
    display_name: 'Euan Garden',
    email: 'euang@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Euan%20Garden.jpg',
  },
  {
    id: 'e01a7ab1-0498-4364-86cc-7b22410d48f3',
    display_name: 'Tosh Meston',
    email: 'toshm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Tosh%20Meston.jpg',
  },
  {
    id: 'e19dc78a-e677-4d14-b73d-16ea5ad2c3f0',
    display_name: 'Kevin Verboort',
    email: 'kevinv@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Kevin%20Verboort.jpg',
  },
  {
    id: 'e270560d-a319-44cb-8272-9f233fee39c0',
    display_name: 'Ivo Salmre',
    email: 'ivos@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ivo%20Salmre.jpg',
  },
  {
    id: 'e2bab5fd-4aa5-4d26-8f8f-17ba4b163dd7',
    display_name: 'Jo Berry',
    email: 'job@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Jo%20Berry.jpg',
  },
  {
    id: 'e58f3e62-e71c-48d7-aa55-7a0606ac5ec9',
    display_name: 'Iben Thorell',
    email: 'ibent@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Iben%20Thorell.jpg',
  },
  {
    id: 'e644bedd-9b3a-4fa5-be62-f027f2e97dd5',
    display_name: 'Molly Clark',
    email: 'mollyc@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Molly%20Clark.jpg',
  },
  {
    id: 'e89f603c-3707-49a1-92ad-dc6a231b32f8',
    display_name: 'Stan Orme',
    email: 'stano@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Stan%20Orme.jpg',
  },
  {
    id: 'e9008cec-b2a8-4f45-91b1-6a09ae10cd47',
    display_name: 'Andrea Dunker',
    email: 'andread@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Andrea%20Dunker.jpg',
  },
  {
    id: 'e9ad21c4-767b-44f7-be8a-e256e9e77002',
    display_name: 'Diane Glimp',
    email: 'dianeg@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Diane%20Glimp.jpg',
  },
  {
    id: 'eaea736d-6e68-4047-bb22-ca7f8a793ccb',
    display_name: 'Anu Deshpande',
    email: 'anud@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Anu%20Deshpande.jpg',
  },
  {
    id: 'eb91a45a-463d-4fd8-9036-cbacc05860a5',
    display_name: 'Stuart Munson',
    email: 'stuartm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Stuart%20Munson.jpg',
  },
  {
    id: 'ec6c80af-e6f6-4db2-9562-3fc6e2fd7f2e',
    display_name: 'Lolan Song',
    email: 'lolans@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lolan%20Song.jpg',
  },
  {
    id: 'ecd55b50-c750-463c-8eaf-ae8be8f0701b',
    display_name: 'Marko Zajc',
    email: 'markoz@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Marko%20Zajc.jpg',
  },
  {
    id: 'eddf81c2-bd05-46d7-9795-e7890e209b45',
    display_name: 'Sanjay Patel',
    email: 'sanjayp@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Sanjay%20Patel.jpg',
  },
  {
    id: 'f04f136b-df92-46bf-a161-f2990a823694',
    display_name: 'Diane Tibbot',
    email: 'dianet@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Diane%20Tibbot.jpg',
  },
  {
    id: 'f276117d-795e-464f-be3c-80385f7c1f66',
    display_name: 'Pieter Wycoff',
    email: 'pieterw@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Pieter%20Wycoff.jpg',
  },
  {
    id: 'f3631d6c-f336-4b68-82c7-54c0298f62ff',
    display_name: 'Ray Mohrman',
    email: 'raym@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Ray%20Mohrman.jpg',
  },
  {
    id: 'f4a59b38-d5fa-4ae5-8afe-b4fde603dad9',
    display_name: 'Daniel Durrer',
    email: 'danield@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Daniel%20Durrer.jpg',
  },
  {
    id: 'f5a2b7f2-35c5-471e-a8c7-4569ad2861f5',
    display_name: 'Lori Kane',
    email: 'lorik@acmecorp.com',
    picture: 'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Lori%20Kane.jpg',
  },
  {
    id: 'f88a171c-b337-4c26-9c4b-824bb74a0729',
    display_name: 'David Maman',
    email: 'davidm@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/David%20Maman.jpg',
  },
  {
    id: 'f92c1baa-0038-4247-be68-12043fcc34e3',
    display_name: 'Chris Johnson',
    email: 'chrisj@acmecorp.com',
    picture:
      'https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Chris%20Johnson.jpg',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  users,
  filter: '',
}
export const PrimaryWithFilter = Template.bind({})
PrimaryWithFilter.args = {
  users,
  filter: 'chris',
}
export const PrimaryWithSingleFilter = Template.bind({})
PrimaryWithSingleFilter.args = {
  users,
  filter: 'Karin Lamb',
}

export const PrimaryWithEmptyUsers = Template.bind({})
PrimaryWithEmptyUsers.args = {
  users: [],
  filter: 'Karin Lamb',
}
