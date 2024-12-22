import './SkeletonTodoList.css'; 
const SkeletonTodoList = () => {
    return (   
        <div className="Skeleton">
            <div className="Skeleton__ItemList"></div>
            <div className="Skeleton__ItemList"></div>
            <div className="Skeleton__ItemList"></div>
            <div className="Skeleton__ItemList"></div>
            <div className="Skeleton__ItemList"></div>
        </div> 
     );
}
 
export {SkeletonTodoList};