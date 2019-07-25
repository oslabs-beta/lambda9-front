import React, { useState, useContext } from "react";
import { Upload, Button, Icon, message } from "antd";
import { MyContext } from "../../App";

function getBase64(img:any, callback:any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file:any) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

const Avatar: React.FunctionComponent<{}> = () => {
  const [ loading, setLoading ] = useState(false);
  const { dispatch } = useContext(MyContext)
  const context = useContext(MyContext)

  const handleChange = (info:any) => {
    if (info.file.status === "uploading") {
      setLoading(true)
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        (setLoading(false),
        dispatch({type: 'UPLOAD', img: imageUrl})
        )
      );
    }
  };
    const uploadButton = (
      <div>
        <Icon type={loading ? "loading" : "plus"} />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );

    return (
      <Upload
        name='avatar'
        listType='picture-card'
        className='avatar-uploader'
        showUploadList={false}
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        beforeUpload={beforeUpload}
        onChange={handleChange}>
        {context.state.avatar ? (
          <img
            style={{ width: "15em", height: "15em" }}
            src={context.state.avatar}
            alt='avatar'
          />
        ) : (
          uploadButton
        )}
        <Button>
          <Icon type='upload'/> Upload
        </Button>
      </Upload>
    );
}

export default Avatar;
