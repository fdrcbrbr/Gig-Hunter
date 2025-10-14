"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterDate() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<string>(
    searchParams.get('date') || ''
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);


    const params = new URLSearchParams(searchParams.toString());
    if (newDate) {
      params.set('date', newDate);
    } else {
      params.delete('date');
    }


    router.push(`?${params.toString()}`);
  };

  return (
    <div className='my-6'>
      <label htmlFor="date-picker" className='text-neutral-100'>Select a date:</label>
      <input
        id="date-picker"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className='text-neutral-100'
      />
      {selectedDate && (
        <p className='text-neutral-100'>
          Selected date: {new Date(selectedDate).toLocaleDateString('se-SE')}
        </p>
      )}
    </div>
  );
}
