import './AcademicDate.css'

export const AcademicDate = ({ item, selected, changeSelected }) => {
  return (
    <div className={`academic-date ${selected}`} onClick={() => changeSelected(item.id)}>
      <div className={`academic-date-body ${selected}`}>
        <h5 className='number date'>{`${item.startDate} - ${item.endDate}`}</h5>
        <p className='academic-date-title'>{item.title}</p>
      </div>
    </div>
  );
}

export default AcademicDate;
