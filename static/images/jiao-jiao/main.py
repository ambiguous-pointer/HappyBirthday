import os
import os.path
import cv2
import uuid

def getFileNamesByPath(path):
    fileList = os.listdir(path)
    for filename in fileList:
        pathTmp = os.path.join(path,filename)
        if os.path.isdir(pathTmp):
            # getFileNamesByPath(pathTmp)
            pass
        elif os.path.isfile(pathTmp):
            if os.path.splitext(pathTmp)[-1] != ".py":
                # print(pathTmp)
                targetObject = cv2.imread(pathTmp).shape
                s = "".join(["image-",str(uuid.uuid4()),"-",str(targetObject[0]),"-",str(targetObject[1]),os.path.splitext(pathTmp)[-1]])
                print(os.path.join(path,s))
                os.rename(pathTmp,os.path.join(path,s))
            else:
                pass

    pass 


if __name__ == '__main__':
    getFileNamesByPath(str(os.path.abspath("./")))
    pass