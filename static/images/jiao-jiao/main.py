import os
import os.path
import cv2
import uuid
from PIL import Image  

def getFileNamesByPath(path):
    fileList = os.listdir(path)
    for filename in fileList:
        pathTmp = os.path.join(path,filename)
        if os.path.isdir(pathTmp):
            # getFileNamesByPath(pathTmp)
            pass
        elif os.path.isfile(pathTmp):
            if filename.endswith('.webp'):  
                # 构建源文件和目标文件的路径  
                src_path = os.path.join(path, filename)  
                dst_path = os.path.join(path, filename.replace('.webp', '.png'))  
                # 打开webp图像  
                img = Image.open(src_path)  
                # 保存为png格式  
                img.save(dst_path, 'PNG') 
                os.remove(src_path)  
            if os.path.splitext(pathTmp)[-1] != ".py":
                # print(pathTmp)
                img  = cv2.imread(pathTmp)
                if img  is  None:
                    print(f"Error reading image: {pathTmp}")
                    continue
                else:
                    targetObject = img.shape
                s = "".join(["image-",str(uuid.uuid4()),"-",str(targetObject[1]),str(targetObject[0]),"-",os.path.splitext(pathTmp)[-1]])
                print(os.path.join(path,s))
                os.rename(pathTmp,os.path.join(path,s))
            else:
                pass

    pass 
 
if __name__ == '__main__':
    getFileNamesByPath(str(os.path.abspath("./")))
    pass