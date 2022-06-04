import CompositeTable from './CompositeTable/CompositeTable';

const ViewResearch = (props) => {
  const {
    value,
    setValue,
    groups,
    groupData,
    setGroupData,
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
        groups={groups}
        groupData={groupData}
        setGroupData={setGroupData}
        handleSubmit={handleSubmit}
        clear={clear}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </>
  );
};

export default ViewResearch;
