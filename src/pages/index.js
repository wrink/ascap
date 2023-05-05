import { useState, useCallback } from 'react';
import { Layout } from '../components/Layout';
import { FormSteps, FormStep } from '../components/FormSteps';
import { MemberCard } from '../components/MemberCard';
import { Select } from '../components/Select';

const languages = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Español',
    value: 'es'
  },
];

const publisherTypes = [
  'Individual / Sole proprietor or Single-member LLC',
  'C Corporation',
  'S Corporation',
  'LLC - C Corporation',
  'LLC - S Corporation',
  'LLC - Partnership',
  'Partnership',
  'Trust / Estate',
  'OTHER',
];

const membershipTypes = [
  {
    index: 'writer_and_publisher',
    isPublisher: true,
    title: 'Writer and Publisher',
    price: 0,
    description: 'ASCAP royalties are split evenly between writers and publishers. Join as both to ensure you get paid everything you deserve.',
    requirements: [
      <>Legal Name</>,
      <>Mailing Address</>,
      <>Valid Email Address</>,
      <>SSN/ITIN</>,
      <>Must be 18 or older to apply online<sup>*</sup></>
    ]
  },
  {
    index: 'writer',
    title: 'Writer',
    price: 0,
    description: 'Writers create musical compositions: the melody, harmony, lyrics, beats, arrangements, etc.',
    requirements: [
      <>Legal Name</>,
      <>Mailing Address</>,
      <>Valid Email Address</>,
      <>SSN/ITIN</>,
      <>Must be 18 or older to apply online<sup>*</sup></>
    ]
  },
  {
    index: 'publisher',
    isPublisher: true,
    title: 'Publisher',
    price: 50,
    nonRefundable: true,
    description: 'Publishers handle the business side of musical compositions, like licensing and copyright administration.',
    requirements: [
      <>Legal Name</>,
      <>Mailing Address</>,
      <>Valid Email Address</>,
      <>SSN/ITIN</>,
      <>Must be 18 or older to apply online<sup>*</sup></>
    ]
  },
];

function App() {
  const [ language, setLanguage ] = useState('en');
  const [ submitFailed, setSubmitFailed ] = useState(false);
  const [ step, setStep ] = useState(0);
  const [ form, setForm ] = useState({
    memberType: '',
    publisherType: ''
  });
  const memberType = membershipTypes.find(({ index }) => index === form.memberType);

  const handleLanguageChange = useCallback((lang) => {
    return () => setLanguage(lang);
  }, [ language, setLanguage ]);

  const handleClick = useCallback((index) => {
    return () => setForm({ ...form, memberType: index });
  }, [ form, setForm ]);

  const handleChange = useCallback((key) => {
    return (value) => setForm({ ...form, [key]: value });
  }, [ form, setForm ]);

  const hasErrors = useCallback(() => {
    const errors = {}

    if (!form.memberType) {
      errors.memberType = true;
    }

    if (memberType?.isPublisher && !form.publisherType) {
      errors.publisherType = true;
    }

    return JSON.stringify(errors) === '{}' ? false : errors;
  }, [ form, memberType ]);

  const handleSubmit = useCallback(() => {
    if (hasErrors()) {
      setSubmitFailed(true);
    } else {
      setSubmitFailed(false);
      setStep(step + 1);
    }
  }, [ form, hasErrors, setSubmitFailed ]);

  return (
    <Layout title='Join ASCAP' subtitle={memberType?.title}>
      <div className='row mb-3'>
        <ul className='nav justify-content-end'>
          {
            languages.map(({ label, value }) => (
              <li className='nav-item' key={value}>
                <a
                  className={`nav-link ${(value === language) && 'disabled'}`}
                  disabled={value === language}
                  onClick={handleLanguageChange(value)}
                 >
                  {label}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <FormSteps active={step}>
        <FormStep title='Choose Your Member Type'>
          <div className='row member-card-row'>
            {
              membershipTypes.map(({ index, ...props }) => (
                <div className='col-lg-4 mb-3' key={index}>
                    <MemberCard
                      activeIndex={form.memberType}
                      error={hasErrors()?.memberType && submitFailed}
                      {...props}
                      onClick={handleClick(index)}
                      index={index}
                    />
                </div>
              ))
            }
          </div>
          {
            (hasErrors()?.memberType && submitFailed) && (
              <p className='text-danger my-2'>
                Please select your membership type.
              </p>
            )
          }
          <p className='small mb-3'>
            <sup>*</sup>If you are under 18 years of age please <a href=''>download the Minor Application form (English & Spanish).</a>
          </p>
          {
            memberType?.isPublisher && (
              <div className='row my-5'>
                <div className='col-lg-8'>
                  <h3>Publisher Company Type</h3>
                  <p>Please select the federal tax classification of your publisher company.</p>
                  <Select
                    label='Publisher Company Type'
                    options={publisherTypes.map(value => ({ value, label: value }))}
                    onChange={handleChange('publisherType')}
                    error={
                      hasErrors()?.publisherType && 
                      submitFailed &&
                      'Please select your publisher company type.'
                    }
                  />
                </div>
              </div>
            )
          }
          <p className='small'>
            ASCAP uses TINCheck and SmartyStreets to verify certain information provided by you in connection with your application. Any information processed by TINCheck and SmartyStreets shall be subject to the privacy policies of 
            <a href='https://www.tincheck.com/pages/tincheck-agreement'>TINCheck</a>
            and
            <a href='https://smartystreets.com/legal/privacy-policy'>SmartyStreets.</a>
          </p>
          <button type='button' className='btn btn-outline-muted' href='https://www.ascap.com/'>CANCEL</button>
          <button type='button' className='btn btn-primary mx-4' onClick={handleSubmit}>CONTINUE</button>
        </FormStep>
        <FormStep title='General' />
        <FormStep title='Royalties' />
        <FormStep title='Required Documents' />
        <FormStep title='Account Creation' />
        <FormStep title='Submit Application' />
      </FormSteps>
    </Layout>
  );
}

export default App;
