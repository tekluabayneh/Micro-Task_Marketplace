import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { Button } from "../../Buttons/button";
import { FileImage, File, X, Check, Upload, Link } from "lucide-react";

// Progress bar component
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className="bg-purple-500 h-1.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const Attachment_urlPage = ({ Attachment_url, urlsStore }) => {
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  console.log("this are the file man", files);
  console.log("this are the ursl man", urls);
  // Simplified file icon selector
  const getFileIcon = (mimeType) => {
    if (mimeType.startsWith("image/")) return FileImage;
    return File;
  };

  useEffect(() => {
    Attachment_url.push(files);
    urlsStore.push(urls);
  }, [files, urls]);

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  // Process multiple files
  const handleFiles = (newFiles) => {
    const processedFiles = newFiles
      .map(processFile)
      .filter((file) => file !== null);

    if (processedFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...processedFiles]);
    }
  };

  // Handle file input change
  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  // Process a single file
  const processFile = (file) => {
    const id = `${file.name}-${Date.now()}`;

    if (
      files.some((f) => f.file.name === file.name && f.file.size === file.size)
    ) {
      toast.success("The URL has been added successfully.");
      return null;
    }

    let preview = undefined;
    if (file.type.startsWith("image/")) {
      preview = URL.createObjectURL(file);
    }

    const newFile = {
      file,
      id,
      preview,
      progress: 0,
      status: "uploading",
    };

    simulateFileUpload(newFile);

    return newFile;
  };

  // Simulate file upload with progress
  const simulateFileUpload = (fileObj) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.id === fileObj.id
              ? { ...f, progress: 100, status: "complete" }
              : f
          )
        );
        toast.success("The URL has been added successfully.");
      } else {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.id === fileObj.id ? { ...f, progress: Math.round(progress) } : f
          )
        );
      }
    }, 300);
  };

  // Remove a file
  const handleRemoveFile = (id) => {
    setFiles((prevFiles) => {
      const fileToRemove = prevFiles.find((f) => f.id === id);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prevFiles.filter((f) => f.id !== id);
    });
  };

  // Handle URL submission
  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    try {
      new URL(url);
    } catch {
      toast.error("err");
      return;
    }

    const urlEntry = {
      id: `url-${Date.now()}`,
      url,
      status: "complete",
    };
    setUrls((prev) => [...prev, urlEntry]);
    setUrl("");

    toast.success("The URL has been added successfully.");
  };

  // Remove a URL
  const handleRemoveUrl = (id) => {
    setUrls((prev) => prev.filter((u) => u.id !== id));

    toast.success("The URL has been added successfully.");
  };

  return (
    <div className="space-y-6">
      {/* Drag and Drop Area */}
      <div
        className={
          isDragging
            ? "border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-200 ease-in-out border-purple-500 bg-purple-50"
            : "border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-200 ease-in-out border-gray-300 hover:border-purple-400 bg-white"
        }
        onDragEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!isDragging) {
            setIsDragging(true);
          }
        }}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{ minHeight: "200px" }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          className="hidden"
          multiple
        />

        <div className="mb-4">
          <div className="rounded-full bg-purple-100 p-4">
            <Upload className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">
            {isDragging ? "Drop files here" : "Drag & drop files here"}
          </p>
          <p className="text-sm text-gray-500 mt-2">or click to browse</p>
        </div>
      </div>

      {/* URL Input Form */}
      <form onSubmit={handleUrlSubmit} className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a URL to attach..."
          className="flex-1 custom-shadow p-1 rounded-sm"
        />
        <Button
          type="submit"
          className="shrink-0 bg-black text-white cursor-pointer"
        >
          <Link className="w-4 h-4 mr-2" />
          Add URL
        </Button>
      </form>

      {/* Attachments List */}
      {(files.length > 0 || urls.length > 0) && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-gray-700">
                Attachments ({files.length + urls.length})
              </h2>
              {(files.length > 0 || urls.length > 0) && (
                <button
                  onClick={() => {
                    files.forEach(
                      (f) => f.preview && URL.revokeObjectURL(f.preview)
                    );
                    setFiles([]);
                    setUrls([]);

                    toast.success("The URL has been added successfully.");
                  }}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear all
                </button>
              )}
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {/* File Items */}
            {files.map((fileItem) => {
              const FileIcon = getFileIcon(fileItem.file.type);
              const isImage = fileItem.file.type.startsWith("image/");

              return (
                <li key={fileItem.id} className="p-4">
                  <div className="flex items-start space-x-3">
                    {isImage && fileItem.preview ? (
                      <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={fileItem.preview}
                          alt={fileItem.file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <FileIcon className="w-5 h-5 text-gray-500" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {fileItem.file.name}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFile(fileItem.id);
                          }}
                          className="ml-2 text-gray-400 hover:text-gray-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-1">
                        {fileItem.status === "uploading" ? (
                          <ProgressBar progress={fileItem.progress} />
                        ) : fileItem.status === "complete" ? (
                          <div className="flex items-center text-xs text-green-600">
                            <Check className="w-3 h-3 mr-1" />
                            <span>Upload complete</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-xs text-red-600">
                            <X className="w-3 h-3 mr-1" />
                            <span>Upload failed</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            {/* URL Items */}
            {urls.map((urlItem) => (
              <li key={urlItem.id} className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Link className="w-5 h-5 text-purple-500" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <a
                        href={urlItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-purple-600 hover:text-purple-700 truncate"
                      >
                        {urlItem.url}
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveUrl(urlItem.id);
                        }}
                        className="ml-2 text-gray-400 hover:text-gray-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center text-xs text-green-600">
                      <Check className="w-3 h-3 mr-1" />
                      <span>URL added</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Attachment_urlPage;
