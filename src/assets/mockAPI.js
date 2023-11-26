const availableTimesByDate = {
    '2023-11-20': ['10:00', '11:00', '12:00'],
    '2023-11-21': ['10:00', '11:00', '12:00'],
    '2023-11-22': ['14:00', '15:00', '16:00'],
    '2023-11-23': ['10:00', '11:00', '12:00'],
    '2023-11-24': ['14:00', '15:00', '16:00'],
    '2023-11-25': ['10:00', '11:00', '12:00'],
    '2023-11-26': ['14:00', '15:00', '16:00'],
    '2023-11-27': ['10:00', '11:00', '12:00'],
    '2023-11-28': ['14:00', '15:00', '16:00'],
    '2023-11-29': ['10:00', '11:00', '12:00'],
    '2023-11-30': ['14:00', '15:00', '16:00'],
    '2023-12-01': ['14:00', '15:00', '16:00'],
    '2023-12-02': ['10:00', '11:00', '12:00'],
    '2023-12-03': ['14:00', '15:00', '16:00'],
    '2023-12-04': ['10:00', '11:00', '12:00'],
    '2023-12-05': ['14:00', '15:00', '16:00'],
    '2023-12-06': ['10:00', '11:00', '12:00'],
    '2023-12-07': ['14:00', '15:00', '16:00'],
    '2023-12-08': ['10:00', '11:00', '12:00'],
    '2023-12-09': ['14:00', '15:00', '16:00'],
    '2023-12-10': ['10:00', '11:00', '12:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            } else {
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    console.log(formData)

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    console.log(availableTimesByDate[formData.date])

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export {fetchAPI, submitAPI}