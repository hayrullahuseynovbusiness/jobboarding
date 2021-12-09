function JobPost() {
  return (
    <div className="px-2 py-3 cursor-pointer group">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg group-hover:underline">
          ReactJs Developer
        </h1>
        <p className="bg-green-500 px-1.5 py-1 text-white text-xs rounded">
          New
        </p>
      </div>
      <p>
        <span className="">Yashlyk</span> {" - "}
        <span className="text-gray-500">Mary</span>
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis,
        perspiciatis unde itaque error, enim deleniti facere sed sit recusandae
        quia eius...
      </p>
      <p className="text-sm text-gray-600 mt-2">1 day ago</p>
    </div>
  );
}

export default JobPost;
