import React from "react";

interface props {
  id: string;
  onRemove: () => void;
  onUpload: (file: File) => void;
  cover: string | null;
  editable: boolean;
  className?: string;
  processing: boolean;
}

export const ImageOperationHandler: React.FC<props> = ({
  id,
  onUpload,
  onRemove,
  cover,
  className,
  editable,
  processing,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    console.log(file);

    onUpload(file);
  };

  return (
    editable && (
      <div className={`image-operation-handler group ${className} text-sm`}>
        {cover ? (
          <>
            <label
              id={id}
              className="font-bold opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              Change
            </label>
            <input
              id={id}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={processing}
            />
            <div className="h-1 w-1 rounded-full theme-accent opacity-0 group-hover:opacity-100"></div>
            <button
              onClick={onRemove}
              className="font-bold opacity-0 group-hover:opacity-100"
              disabled={processing}
            >
              Remove
            </button>
          </>
        ) : (
          <>
            <label
              htmlFor={id}
              className="font-bold opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              Upload
            </label>
            <input
              id={id}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={processing}
            />
          </>
        )}
      </div>
    )
  );
};
