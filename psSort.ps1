$hsComponentExports = new-object System.Collections.Generic.HashSet[string]
$hsDefaultExports = new-object System.Collections.Generic.HashSet[string]
$reader = [System.IO.File]::OpenText($file)
try {
  while (($line = $reader.ReadLine()) -ne $null)
  {
    # If $line contains text from a 'default' export then save this to seperate variable
    if ($line.Contains('import') -or $line.Contains('declare') -or $line.Contains('export default')) {
      $t = $hsDefaultExports.Add($line)
    } else {
      $t = $hsComponentExports.Add($line)
    }
  }
}
finally {
  $reader.Close()
}

$defaultExports = new-object system.collections.generic.List[string] $hsDefaultExports;
$componentExports = new-object system.collections.generic.List[string] $hsComponentExports;

# Sort component exports alphabetically
$componentExports.Sort();

# Add lines to file
try
{
  $f = New-Object System.IO.StreamWriter $file;
  # Write default exports to file
  foreach ($s in $defaultExports)
  {
    $f.WriteLine($s);
  }
  # Write component exports to file
  foreach ($s in $componentExports)
  {
    $f.WriteLine($s);
  }
}
finally
{
  $f.Close();
}