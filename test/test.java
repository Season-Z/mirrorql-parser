public record MetaInfo(Set<String> decls, Map<String, String> attrs) {
  public static final String IDKey = "id";

  public static final String DBKey = "db";

  public static final String IOKey = "io";

  public static final String InputKey = "input";

  public static final String OutputKey = "output";

  public static final String ExternalKey = "external";

  public String getID() {
    return attrs.get(IDKey);
  }

  public Optional<String> getDbPath() {
    return Optional.ofNullable(attrs.get(DBKey));
  }

  public String getIOType() {
    return attrs.get(IOKey);
  }

  public boolean isFileIO() {
    return Objects.equals(attrs.get(IOKey), "file");
  }

  public boolean isExternal() {
    return decls.contains(ExternalKey);
  }

  public boolean isOutput() {
    return decls.contains(OutputKey);
  }

  public boolean isInput() {
    return decls.contains(InputKey);
  }
}
