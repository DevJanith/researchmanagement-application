import CompositeTable from './CompositeTable/CompositeTable';

const ViewRequest = (props) => {
  const {
    value,
    setValue,
    researches,
    researchData,
    setResearchData,
    handleSubmit,
    clear,
    currentId,
    setCurrentId
  } = props

  return (
    <>
      <CompositeTable
        value={value}
        setValue={setValue}
        researches={researches}
        researchData={researchData}
        setResearchData={setResearchData}
        handleSubmit={handleSubmit}
        clear={clear}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </>
  );
};

export default ViewRequest;
