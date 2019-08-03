procedure BubbleSort(var Vetor: Array of Integer);
  var
    i, temp: Integer;
    changed: Boolean;
  begin
    changed := True;

    while changed do
    begin
      changed := False;
      for i := Low(Vetor) to High(Vetor)-1 do
      begin
        if (Vetor[i] > Vetor[i+1]) then
        begin
          temp := Vetor[i+1];
          Vetor[i+1] := Vetor[i];
          Vetor[i] := temp;
          changed := True;
        end;
      end;
    end;
  end;

var
  v: Array[1..20] of Integer;
  i: Integer;
begin
  Randomize;

  //Fill with random values
  for i := 1 to 20 do
  begin
    v[i] := Random(1000);
  end;

  //Print numbers before sort
  Writeln('Original Order');
  for i := 1 to 20 do
  begin
    Writeln(v[i]);
  end;

  BubbleSort(v);

  //Print sorted numbers
  Writeln('');
  Writeln('Ordered');
  for i := 1 to 20 do
  begin
    Writeln(v[i]);
  end;

  ReadLn;
end.
