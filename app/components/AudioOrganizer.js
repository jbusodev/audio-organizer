'use client'
import React, { useState, useRef } from 'react';
import { Trash2, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const AudioOrganizer = () => {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const fileInputRef = useRef(null);
  
  // In a real app, this would be determined by actual authentication
  const isAdmin = true; // Set this to true to test admin features

  const addGroup = () => {
    if (newGroupName.trim() && isAdmin) {
      setGroups([...groups, { name: newGroupName, files: [] }]);
      setNewGroupName('');
    }
  };

  const addAudioFile = (groupIndex, file) => {
    if (isAdmin) {
      const newGroups = [...groups];
      newGroups[groupIndex].files.push({
        name: file.name,
        url: URL.createObjectURL(file)
      });
      setGroups(newGroups);
    }
  };

  const removeAudioFile = (groupIndex, fileIndex) => {
    if (isAdmin) {
      const newGroups = [...groups];
      newGroups[groupIndex].files.splice(fileIndex, 1);
      setGroups(newGroups);
    }
  };

  const removeGroup = (groupIndex) => {
    if (isAdmin) {
      const newGroups = [...groups];
      newGroups.splice(groupIndex, 1);
      setGroups(newGroups);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Audio Organizer</h1>
      
      {isAdmin ? (
        <div className="mb-4 flex">
          <Input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="Enter group name"
            className="mr-2"
          />
          <Button onClick={addGroup}>Add Group</Button>
        </div>
      ) : (
        <Alert className="mb-4">
          <Lock className="h-4 w-4" />
          <AlertTitle>Viewing Mode</AlertTitle>
          <AlertDescription>
            You are in view-only mode. Only admins can add or modify groups and audio files.
          </AlertDescription>
        </Alert>
      )}

      {groups.map((group, groupIndex) => (
        <Card key={groupIndex} className="mb-4">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {group.name}
              {isAdmin && (
                <Button variant="destructive" size="sm" onClick={() => removeGroup(groupIndex)}>
                  <Trash2 size={16} />
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isAdmin && (
              <input
                type="file"
                accept=".wav,.mp3,.ogg"
                onChange={(e) => addAudioFile(groupIndex, e.target.files[0])}
                className="mb-2"
                ref={fileInputRef}
              />
            )}
            {group.files.map((file, fileIndex) => (
              <div key={fileIndex} className="flex items-center mb-2">
                <audio controls src={file.url} className="mr-2" />
                <span className="flex-grow">{file.name}</span>
                {isAdmin && (
                  <Button variant="destructive" size="sm" onClick={() => removeAudioFile(groupIndex, fileIndex)}>
                    <Trash2 size={16} />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AudioOrganizer;