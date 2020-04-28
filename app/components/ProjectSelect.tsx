/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Select from 'react-select';
import { AppContext } from '../contexts/AppContext';

/* const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]; */

export default function ProjectSelect() {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const { projectsArr } = React.useContext(AppContext);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      placeholder="Projects.."
      value={selectedOption}
      onChange={handleChange}
      options={projectsArr}
    />
  );
}
