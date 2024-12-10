const getStudentsWithNamesAndTopNotes = students =>
    students.map(student => ({
      name: student.name,
      topNote: Math.max(...student.notes, 0),
    }));