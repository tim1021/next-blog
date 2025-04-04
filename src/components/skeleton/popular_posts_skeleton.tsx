import { Skeleton } from "../ui/skeleton";


export default function SkeletonCard(){
  return (
    <div className=" flex flex-col space-y-3">
      <Skeleton className="flex flex-col space-y-3"/>
      <div className="space-y-2">
      <Skeleton className="h-4 w-[300]"/>
      <Skeleton className="h-4 w-[250]"/>
      <Skeleton className="h-4 w-[200]"/>
      </div>
    </div>
  )
}
