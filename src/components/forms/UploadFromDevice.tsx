import { useController } from "react-hook-form";

const UploadFromDevice = ({ name, title }:{ name: string, title: string }) => {
    const { field: { onChange } } = useController({ name });
    const convertBase64 = (file: Blob) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (e) => {
        reject(e);
      };
    });
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectFile = async (e: any) => {
      try {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        onChange(base64)
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="py-2 border border-gray-0.5 shadow-1 overflow-hidden rounded-sm text-green-1.5 font-medium w-44 h-10 relative flex flex-col justify-center">
        <label
        >
          <input
            type="file"
            accept=".jpeg,.png,.jpg,.webp"
            onChange={selectFile}
            className="invisible"
          />
        </label>
        <p className="w-full absolute inline-block top-1/2 left-0 ml-4 -z-10 -translate-y-1/2 text-sm">{title}</p>
      </div>
    );
  };

  export default UploadFromDevice